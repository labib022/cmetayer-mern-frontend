import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}