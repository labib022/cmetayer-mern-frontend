import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Send code to:", email);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F0F0F0] px-4 py-10">

      {/* Card */}
      <div className="w-full max-w-[480px] flex flex-col items-center gap-[35px] p-8 rounded-[32px] bg-[#FAFAFA]">

        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-rethink text-[#1F1F1F] text-2xl font-medium leading-[140%] tracking-[-0.936px] m-0">
            Forgot your password?
          </h1>
          <p className="font-rethink text-[#595959] text-base font-normal leading-[140%] text-center m-0">
            Don't worry, we've got you covered. Let us guide you through the
            process of regaining access to your account effortlessly. Enter
            your existed email address
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="font-rethink text-[#0B1714] text-base font-semibold leading-[140%]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="font-rethink w-full outline-none transition-all duration-200 p-3 rounded-xl border border-[#E2E6EF] bg-white text-[#1F1F1F] text-[15px] focus:border-[#08203C]"
              onFocus={(e) => (e.target.style.borderColor = "#08203C")}
              onBlur={(e) => (e.target.style.borderColor = "#E2E6EF")}
            />
          </div>

          {/* Helper text */}
          <p className="font-rethink text-[#595959] text-sm leading-[140%] m-0">
            We will send you a notification through your email address, so
            please ensure that your email is correct.
          </p>

          {/* Send a Code Button */}
          <button
            type="submit"
            className="font-rethink w-full flex items-center justify-center gap-2 py-4 px-[18px] rounded-[40px] bg-[#08203C] text-white text-base font-semibold leading-[140%] border-none cursor-pointer hover:opacity-90 transition-opacity duration-200"
          >
            Send a Code
          </button>

          {/* Back to Login */}
          <p className="font-rethink text-[#595959] text-[15px] font-normal m-0 text-center">
            Remember your password?{" "}
            <Link
              to="/login"
              className="font-rethink text-[#08203C] font-bold no-underline hover:underline transition-all duration-200"
            >
              Sign in
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}