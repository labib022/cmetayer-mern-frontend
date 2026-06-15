import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import googleIcon from "../../assets/icons/google-logo.svg";
import { useSignInMutation } from "../../redux/features/auth/authApi";
import { setCredentials } from "../../redux/features/auth/authSlice";

const inputBase =
  "w-full outline-none transition-all duration-200 px-4 py-3.5 rounded-xl border border-[#E2E6EF] bg-white text-[#1F1F1F] text-[15px] focus:border-[#08203C] font-[Rethink_Sans]";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const [signIn, { isLoading }] = useSignInMutation();

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn({
        email: form.email,
        password: form.password,
      }).unwrap();

      dispatch(
        setCredentials({
          user: result.data.user,
          access: result.data.access,
          refresh: result.data.refresh,
        }),
      );

      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      const data = err?.data;
      if (data?.field === "otp") {
        toast.error("Account not verified. Redirecting to OTP...");
        navigate("/verify-code", {
          state: { email: form.email, flow: "verify-account" },
        });
      } else {
        toast.error(data?.message || "Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F0F0F0] px-4 py-10">
      <div className="w-full max-w-120 flex flex-col items-center gap-8 p-8 rounded-4xl bg-[#FAFAFA]">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1
            className="text-[#1F1F1F] text-2xl font-medium leading-[140%] tracking-[-0.936px] m-0"
            style={{ fontFamily: '"Rethink Sans", sans-serif' }}
          >
            Welcome Back!
          </h1>
          <p
            className="text-[#595959] text-base font-normal leading-[140%] text-center m-0"
            style={{ fontFamily: '"Rethink Sans", sans-serif' }}
          >
            Been a while! Ready to dive back in? Let's get you signed in and
            back to business!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#0B1714] text-base font-semibold leading-[140%]"
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange("email")}
              required
              className={inputBase}
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#0B1714] text-base font-semibold leading-[140%]"
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            >
              Password
            </label>

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange("password")}
                required
                className={`${inputBase} pr-12`}
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#08203C] transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
              >
                {showPassword ? (
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-[#08203C] text-sm font-medium no-underline hover:underline transition-all duration-200"
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-4 px-5 rounded-[40px] bg-[#08203C] text-white text-base font-semibold leading-[140%] border-none cursor-pointer hover:opacity-90 transition-opacity duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ fontFamily: '"Rethink Sans", sans-serif' }}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px bg-[#E2E6EF]" />
            <span
              className="text-[#888] text-sm"
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            >
              or
            </span>
            <div className="flex-1 h-px bg-[#E2E6EF]" />
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-4 px-5 rounded-[40px] bg-[#1F1F1F] text-white text-base font-semibold leading-[140%] border-none cursor-pointer hover:opacity-90 transition-opacity duration-200"
            style={{ fontFamily: '"Rethink Sans", sans-serif' }}
          >
            <img
              src={googleIcon}
              alt="Google"
              className="w-5 h-5"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            Sign In With Google
          </button>
        </form>

        {/* Sign Up Link */}
        <p
          className="text-[#595959] text-[15px] font-normal m-0 text-center"
          style={{ fontFamily: '"Rethink Sans", sans-serif' }}
        >
          Doesn't have an account?{" "}
          <Link
            to="/register"
            className="text-[#08203C] font-bold no-underline hover:underline transition-all duration-200"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
