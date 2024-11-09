import styles from "./Sidebar.module.scss";
import CNavLink from "../ui/CNavLink/CNavLink";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <CNavLink to="/">Main</CNavLink>
      <CNavLink to="/test">Test</CNavLink>
    </div>
  );
}
