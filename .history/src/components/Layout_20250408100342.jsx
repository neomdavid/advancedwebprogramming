import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet className="outlet-container" />
    </>
  );
};

export default Layout;
