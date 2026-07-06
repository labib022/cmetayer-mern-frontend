import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LaundryBookingStep1 from "../../../components/main/services/laundry/laundrybooking/LaundryBookingStep1";
import LaundryContactInfo from "../../../components/main/services/laundry/laundrybooking/LaundryContactInfo";
import LaundrySuccess from "../../../components/main/services/laundry/laundrybooking/LaundrySuccess";

export default function LaundryBookingPage() {
  const [bookingData, setBookingData] = useState({
    bagSize: "Medium (up to 20 lbs)",
    washType: "Standard Clothing",
    detergent: "Standard Premium Detergent",
    serviceDate: "",
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

      <Route
        path="laundry-contact-info"
        element={
          <LaundryContactInfo data={bookingData} setData={setBookingData} />
        }
      />
      <Route path="success" element={<LaundrySuccess data={bookingData} />} />
    </Routes>
  );
}
