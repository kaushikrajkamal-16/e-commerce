import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Topbar from "./Topbar";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
