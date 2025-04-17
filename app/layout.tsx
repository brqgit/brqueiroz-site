import { Outlet, useLocation } from "react-router";
import AppNavbar from "~/components/app-navbar";
import AppFooter from "./components/app-footer";

export default function AppLayout() {
  const location = useLocation();
  const isNotServiceRoute = location.pathname !== "/services";

  return (
    <div>
      {
        isNotServiceRoute &&
        <AppNavbar />
      }
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}