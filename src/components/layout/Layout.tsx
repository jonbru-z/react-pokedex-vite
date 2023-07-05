import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <nav>
          <a href="#">Home</a> | <a href="#">Profile</a>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
