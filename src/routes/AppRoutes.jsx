import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthRoutes from "./AuthRoutes";
import HomePage from "../pages/main/home/Homepage";
import AboutPage from "../pages/about/About";
import ContactPage from "../pages/contact/Contact";
import MovingPage from "../pages/services/moving/MovingPage";
import CleaningPage from "../pages/services/cleaning/CleaningPage";
import LaundryPage from "../pages/services/laundry/LaundryPage";
import RepairPage from "../pages/services/repair/RepairPage";
import MovingBookingPage from "../pages/services/moving/MovingBookingPage";
import CleaningBookingPage from "../pages/services/cleaning/CleaningBookingPage";
import LaundryBookingPage from "../pages/services/laundry/LaundryBookingPage";
import RepairBookingPage from "../pages/services/repair/RepairBookingPage";
import PrivacyPolicyPage from "../shared/PrivacyPolicy";
import TermsAndConditionsPage from "../shared/TermsandCondition";
import Profile from "../shared/Profile"; 

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Main Routes — Navbar + Footer সহ ── */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ourvalues" element={<div>Our Values</div>} />
          <Route path="/ourservices" element={<div>Our Services</div>} />
          <Route path="/clients" element={<div>Clients</div>} />
          <Route path="/faq" element={<div>Faq</div>} />
          <Route path="/quote" element={<div>Quote</div>} />
          <Route path="/footer" element={<div>Footer</div>} />
          <Route path="/ourfoundation" element={<div>Our Foundation</div>} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />

          {/* ── Service Routes ── */}
          <Route path="/services/moving" element={<MovingPage />} />
          <Route path="/services/cleaning" element={<CleaningPage />} />
          <Route path="/services/laundry" element={<LaundryPage />} />
          <Route path="/services/repair" element={<RepairPage />} />

          {/* ✅ Profile Route — Navbar + Footer সহ */}
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* ── Moving Booking — Navbar/Footer ছাড়া ── */}
        <Route path="/services/moving/book/*" element={<MovingBookingPage />} />

        {/* ── Cleaning Booking — Navbar/Footer ছাড়া ── */}
        <Route path="/services/cleaning/book/*" element={<CleaningBookingPage />} />

        {/* ── Laundry Booking — Navbar/Footer ছাড়া ── */}
        <Route path="/services/laundry/laundry-booking/*" element={<LaundryBookingPage />} />

        {/* ── Repair Booking — Navbar/Footer ছাড়া ── */}
        <Route path="/services/repair/book/*" element={<RepairBookingPage />} />

        {/* ── Auth Routes — Navbar/Footer ছাড়া ── */}
        <Route path="/*" element={<AuthRoutes />} />

      </Routes>
    </BrowserRouter>
  );
}