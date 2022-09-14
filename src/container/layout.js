import { Outlet } from "react-router-dom";
import Header from "../components/header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="md:p-12 p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
