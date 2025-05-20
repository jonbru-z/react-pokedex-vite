/// <reference types="vitest" />
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/vitest-setup.ts"],
  },
});
