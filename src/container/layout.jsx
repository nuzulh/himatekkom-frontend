import { Outlet } from "react-router-dom";
import Header from "../components/header";

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="md:px-24 p-4 min-h-screen bg-[#f5f5f5] md:mt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
