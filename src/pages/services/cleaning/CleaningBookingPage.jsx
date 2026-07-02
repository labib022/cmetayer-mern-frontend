import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CleaningBookingStep1 from "../../../components/main/services/cleaning/cleaningbooking/CleaningBookingStep1";
import CleaningContactInfo from "../../../components/main/services/cleaning/cleaningbooking/CleaningContactInfo";
import CleaningSuccess from "../../../components/main/services/cleaning/cleaningbooking/CleaningSuccess";

export default function CleaningBookingPage() {
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
          <CleaningBookingStep1 data={bookingData} setData={setBookingData} />
          
        }
      />
      <Route path="cleaning-contact-info" element={<CleaningContactInfo data={bookingData} setData={setBookingData} />} />
      <Route path="success" element={<CleaningSuccess data={bookingData} />} />

    </Routes>
  );
}
