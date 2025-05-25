import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet className="outlet-container" />
      <Footer />
    </>
  );
};

export default Layout;
