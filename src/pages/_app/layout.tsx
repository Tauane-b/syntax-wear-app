import { Outlet, createFileRoute, useLocation } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/sign-in" ||
    location.pathname === "/sign-up";

  return (
    <div>
      {!hideLayout && <Header />}

      <Outlet />

      {!hideLayout && <Footer />}
    </div>
  );
}
