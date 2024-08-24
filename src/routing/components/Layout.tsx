import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <div id="main">
        {/* Placeholder for Child Componenet */}
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
