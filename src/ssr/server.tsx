import { createServer } from "node:http";
import React from "react";
import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import { routes } from "./routes";

const handler = createStaticHandler(routes);

const server = createServer(async (req, res) => {
  try {
    const request = new Request(`http://localhost${req.url}`, {
      method: req.method,
      headers: req.headers as any,
    });
    const context = await handler.query(request);
    if (context instanceof Response) {
      res.statusCode = context.status;
      res.end(await context.text());
      return;
    }
    const router = createStaticRouter(handler.dataRoutes, context);
    const markup = renderToString(
      <StaticRouterProvider router={router} context={context} />
    );
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<!DOCTYPE html><html><head><meta charset="UTF-8" /></head><body><div id="root">${markup}</div><script type="module" src="/src/main.tsx"></script></body></html>`);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(5173, () => {
  console.log("SSR server running at http://localhost:5173");
});
