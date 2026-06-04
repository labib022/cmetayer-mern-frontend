import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StepOne from "../../../components/main/services/moving/booking/StepOne";
import StepTwo from "../../../components/main/services/moving/booking/StepTwo";
import StepThree from "../../../components/main/services/moving/booking/StepAThree";

export default function MovingBookingPage() {
  const [bookingData, setBookingData] = useState({
    pickup: "",
    dropoff: "",
    moveDate: "",
    homeSize: "",
    heavyItems: [],
    needPacking: true,
    fullName: "",
    email: "",
    phone: "",
  });

  return (
    <Routes>

      <Route path="step-1" element={<StepOne data={bookingData} setData={setBookingData} />} />
      <Route path="step-2" element={<StepTwo data={bookingData} setData={setBookingData} />} />
      <Route path="step-3" element={<StepThree data={bookingData} setData={setBookingData} />} />

    </Routes>
  );
}