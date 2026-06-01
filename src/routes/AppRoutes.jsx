import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthRoutes from "./AuthRoutes";
import HomePage from "../pages/main/home/HomePage";
import AboutPage from "../pages/about/About";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Main Routes — Navbar + Footer সহ ── */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/ourvalues" element={<div>Our Values</div>} />
          <Route path="/ourservices" element={<div>Our Services</div>} />
          <Route path="/clients" element={<div>Clients</div>} />
          <Route path="/faq" element={<div>Faq</div>} />
          <Route path="/quote" element={<div>Quote</div>} />
          <Route path="/footer" element={<div>Footer</div>} />
          <Route path="/ourfoundation" element={<div>Our Foundation</div>} />
        </Route>

        {/* ── Auth Routes — Navbar/Footer ছাড়া ── */}
        <Route path="/*" element={<AuthRoutes />} />

      </Routes>
    </BrowserRouter>
  );
}