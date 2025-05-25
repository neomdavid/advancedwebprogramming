import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <Navbar>
      <Outlet />
    </Navbar>
  );
};

export default Layout;
