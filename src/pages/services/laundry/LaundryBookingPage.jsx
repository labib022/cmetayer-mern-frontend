import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LaundryBookingStep1 from "../../../components/main/services/laundry/laundrybooking/LaundryBookingStep1";
import LaundrySuccess from "../../../components/main/services/laundry/laundrybooking/LaundrySuccess";


export default function LaundryBookingPage() {
  const [bookingData, setBookingData] = useState({
    bedrooms: 1,
    bathrooms: 1,
    serviceCategory: "Standard Clean",
    serviceDate: "",
    frequency: "One-time (0%)",
    fullName: "",
    email: "",
    phone: "",
  });

  return (
    <Routes>
      <Route
        path="step-1"
        element={
          <LaundryBookingStep1 data={bookingData} setData={setBookingData} />
        }
      />

      <Route path="success" element={<LaundrySuccess data={bookingData} />} />
    </Routes>
  );
}
