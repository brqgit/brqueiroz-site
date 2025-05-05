import { Outlet, useLocation } from "react-router";
import AppNavbar from "~/components/app-navbar";
import AppHeader from "~/components/app-header";
import AppFooter from "~/components/app-footer";

export default function AppLayout() {
  const location = useLocation();
  const isNotServiceRoute = location.pathname !== "/services";

  return (
    <div>
      {
        isNotServiceRoute && (
          <>
            <AppNavbar />
            <AppHeader />
          </>
        )}
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}