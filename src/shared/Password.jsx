import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useChangePasswordMutation } from "../redux/features/auth/authApi";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const [form, setForm] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [show, setShow] = useState({
    old_password: false,
    new_password: false,
    confirm_password: false,
  });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    if (form.new_password !== form.confirm_password) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      await changePassword(form).unwrap();
      toast.success("Password changed successfully!");
      setForm({ old_password: "", new_password: "", confirm_password: "" });
      navigate("/profile");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to change password.");
    }
  };

  const inputBase =
    "w-full outline-none transition-all duration-200 px-4 py-3.5 rounded-xl border border-[#E2E6EF] bg-white text-[#1F1F1F] text-[15px] focus:border-[#08203C] pr-12";

  const EyeIcon = ({ visible }) => visible ? (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  const fields = [
    { key: "old_password", label: "Current Password" },
    { key: "new_password", label: "New Password" },
    { key: "confirm_password", label: "Confirm New Password" },
  ];

  return (
    <div
      className="min-h-screen w-full bg-[#F0F0F0] px-4 py-10"
      style={{ fontFamily: '"Rethink Sans", sans-serif' }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/profile")}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FAFAFA] border border-[#E2E6EF] cursor-pointer hover:bg-[#82b5f0] transition-colors duration-200"
          >
            ←
          </button>
          <h1 className="text-[#1F1F1F] text-2xl font-bold m-0">Change Password</h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-8 flex flex-col gap-5"
        >
          {fields.map((field) => (
            <div key={field.key} className="flex flex-col gap-2">
              <label className="text-[#0B1714] text-sm font-semibold">{field.label}</label>
              <div className="relative">
                <input
                  type={show[field.key] ? "text" : "password"}
                  value={form[field.key]}
                  onChange={handleChange(field.key)}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  required
                  className={inputBase}
                />
                <button
                  type="button"
                  onClick={() => setShow({ ...show, [field.key]: !show[field.key] })}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#08203C] transition-colors bg-transparent border-none cursor-pointer p-0"
                >
                  <EyeIcon visible={show[field.key]} />
                </button>
              </div>
            </div>
          ))}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-full bg-[#08203C] text-white text-base font-semibold border-none cursor-pointer hover:opacity-90 transition-opacity duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
}