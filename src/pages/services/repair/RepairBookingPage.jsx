import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RepairBookingStep1 from "../../../components/main/services/repair/repairbooking/RepairBookingStep-1";
import RepairSuccess from "../../../components/main/services/repair/repairbooking/RepairSuccess";

export default function RepairBookingPage() {
  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceCategory: "",
    description: "",
    photo: null,
    photoPreview: null,
  });

  return (
    <Routes>
      <Route
        path="step-1"
        element={<RepairBookingStep1 data={bookingData} setData={setBookingData} />}
      />
      <Route path="success" element={<RepairSuccess />} />
    </Routes>
  );
}