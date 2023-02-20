import "./App.css";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./ui/components/RequireAuth";
import Home from "./ui/screens/Home";
import { homeRoute, publicRoute } from "./ui/router/router";
import Dashboard from "./ui/screens/Dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      >
        <Route index element={<Dashboard />} />
        {homeRoute?.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Route>

      {publicRoute?.map(({ path, Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
