import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import {Outlet} from "react-router-dom";

export default function BasicLayout() {
  return (
    <div>
      <Sidebar/>
      <div>
        <Header/>
        <Outlet/>
      </div>
    </div>
  );
}
