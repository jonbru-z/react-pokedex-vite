import { Link, Outlet } from "react-router";
import { Profile } from "../profile/Profile";
import styles from "./Layout.module.scss";

export function Layout() {
  return (
    <div className={styles.root}>
      <header>
        <nav>
          <Link to="/pokemon">Home</Link> | <Link to="/profile">Profile</Link>
        </nav>
        <Profile />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
