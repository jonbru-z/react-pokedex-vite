import { PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import { Profile } from "../profile/Profile";

type LayoutProps = PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.root}>
      <header>
        <nav>
          <a href="#">Home</a> | <a href="#">Profile</a>
        </nav>
        <Profile />
      </header>
      <main>{children}</main>
    </div>
  );
}