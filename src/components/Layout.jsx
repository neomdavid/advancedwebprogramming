import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="outlet-container">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
