import React from "react";
import { Link } from "react-router-dom";
import {
  MdStarRate,
  MdOutlineAccountCircle,
  MdLogout,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import logo from "../../images/logo.png";

export const SideNavBar = () => {
  const logout = () => {
    console.log("test");
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col h-screen p-3 bg-white w-60 shadow-lg">
      <div className="space-y-3">
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-10 aspect-auto" />
          </Link>
        </div>
        <div className="flex-1">
          <ul className="p-4 space-y-3 text-sm">
            <li className="rounded-sm">
              <Link
                to={"/"}
                className="flex items-center p-2 space-x-3 rounded-md text-xl"
              >
                <MdOutlineDashboardCustomize />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to={"/rate"}
                className="flex items-center p-2 space-x-3 rounded-md text-xl"
              >
                <MdStarRate />
                <span>Rate User</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to={"/account"}
                className="flex items-center p-2 space-x-3 rounded-md text-xl"
              >
                <MdOutlineAccountCircle />
                <span>Settings</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                onClick={logout}
                className="flex items-center p-2 space-x-3 rounded-md text-xl"
              >
                <MdLogout />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
