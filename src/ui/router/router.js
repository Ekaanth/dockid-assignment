import Account from "../screens/Account";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Rate from "../screens/Rate";
import SignUp from "../screens/SignUp";

export const publicRoute = [
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "SignUp", Component: SignUp },
];

export const homeRoute = [
  { path: "/", name: "Dashboard", Component: Dashboard },
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
  { path: "/rate", name: "Rate", Component: Rate },
  { path: "/account", name: "Search", Component: Account },
];
