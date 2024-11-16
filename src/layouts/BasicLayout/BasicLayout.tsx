import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import styles from "./BasicLayout.module.scss";

export default function BasicLayout() {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <div>
        <Header/>
        <Outlet/>
      </div>
    </div>
  );
}
