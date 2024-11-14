import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
