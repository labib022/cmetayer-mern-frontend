import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/main/home/HomePage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} /> 
        <Route path="/ourvalues" element={<div>Our Values</div>} /> 
        <Route path="/ourservices" element={<div>Our Services</div>} /> 

      </Routes>
    </BrowserRouter>
  );
}