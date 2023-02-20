import React from "react";
import { Header } from "../components/Header";
import { SideNavBar } from "../components/SideNavBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="drawer drawer-mobile relative">
      <div className="drawer-side flex">
        <SideNavBar />
        <div className="w-full bg-slate-200">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
