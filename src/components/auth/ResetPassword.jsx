import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EyeOpen = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOff = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

export default function ResetPassword() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({ newPassword: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Reset password:", form);
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F0F0F0] px-4 py-10">

      {/* Card */}
      <div className="w-full max-w-[480px] flex flex-col items-center gap-[35px] p-8 rounded-[32px] bg-[#FAFAFA]">

        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-rethink text-[#1F1F1F] text-2xl font-medium leading-[140%] tracking-[-0.936px] m-0">
            Reset your password
          </h1>
          <p className="font-rethink text-[#595959] text-base font-normal leading-[140%] text-center m-0 w-full max-w-[352px]">
            One more step to get your account back, let's reset your password!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">

          {/* New Password */}
          <div className="flex flex-col gap-2">
            <label className="font-rethink text-[#0B1714] text-base font-semibold leading-[140%]">
              New Password
            </label>
            <div className="relative w-full">
              <input
                type={showNew ? "text" : "password"}
                placeholder="Enter your new password"
                value={form.newPassword}
                onChange={handleChange("newPassword")}
                required
                className="font-rethink w-full outline-none transition-all duration-200 px-4 py-3.5 pr-12 rounded-xl border border-[#E2E6EF] bg-white text-[#1F1F1F] text-[15px] focus:border-[#08203C]"
                onFocus={(e) => (e.target.style.borderColor = "#08203C")}
                onBlur={(e) => (e.target.style.borderColor = "#E2E6EF")}
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#08203C] transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
              >
                {showNew ? <EyeOff /> : <EyeOpen />}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="flex flex-col gap-2">
            <label className="font-rethink text-[#0B1714] text-base font-semibold leading-[140%]">
              Confirm New Password
            </label>
            <div className="relative w-full">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm your new password"
                value={form.confirmPassword}
                onChange={handleChange("confirmPassword")}
                required
                className="font-rethink w-full outline-none transition-all duration-200 px-4 py-3.5 pr-12 rounded-xl border border-[#E2E6EF] bg-white text-[#1F1F1F] text-[15px] focus:border-[#08203C]"
                onFocus={(e) => (e.target.style.borderColor = "#08203C")}
                onBlur={(e) => (e.target.style.borderColor = "#E2E6EF")}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#08203C] transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
              >
                {showConfirm ? <EyeOff /> : <EyeOpen />}
              </button>
            </div>
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="font-rethink w-full flex items-center justify-center gap-2 py-4 px-[18px] rounded-[40px] bg-[#08203C] text-white text-base font-semibold leading-[140%] text-center border-none cursor-pointer hover:opacity-90 transition-opacity duration-200 mt-2"
          >
            Reset Password
          </button>

        </form>
      </div>
    </div>
  );
}