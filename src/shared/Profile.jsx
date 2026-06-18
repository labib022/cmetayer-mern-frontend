// src/components/auth/Profile.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateAvatarMutation,
  useChangePasswordMutation,
} from "../redux/features/auth/authApi";
import { ProfileSkeleton } from "../components/common/Skeleton";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const { data: profileData, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const [updateAvatar, { isLoading: isAvatarLoading }] =
    useUpdateAvatarMutation();
  const [changePassword, { isLoading: isChangingPassword }] =
    useChangePasswordMutation();

  const [activeTab, setActiveTab] = useState("profile");
  const [avatarPreview, setAvatarPreview] = useState(null);

  const [profileForm, setProfileForm] = useState({
    full_name: profileData?.data?.full_name || user?.full_name || "",
    linkedin: profileData?.data?.linkedin || "",
    github: profileData?.data?.github || "",
    twitter: profileData?.data?.twitter || "",
  });

  const [passwordForm, setPasswordForm] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const profile = profileData?.data || user;

  const handleAvatarChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image too large (max 5MB)");
      return;
    }
    setAvatarPreview(URL.createObjectURL(file));
    try {
      await updateAvatar(file).unwrap();
      toast.success("Avatar updated!");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update avatar.");
    }
  };

  const handleProfileSave = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(profileForm).unwrap();
      toast.success("Profile updated!");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update profile.");
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordForm.new_password !== passwordForm.confirm_password) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      await changePassword(passwordForm).unwrap();
      toast.success("Password changed successfully!");
      setPasswordForm({
        old_password: "",
        new_password: "",
        confirm_password: "",
      });
    } catch (err) {
      toast.error(err?.data?.message || "Failed to change password.");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  if (isLoading) return <ProfileSkeleton />;

  const inputBase =
    "w-full outline-none transition-all duration-200 px-4 py-3.5 rounded-xl border border-[#E2E6EF] bg-white text-[#1F1F1F] text-[15px] focus:border-[#08203C]";

  const tabs = [
    { key: "profile", label: "My Profile" },
    { key: "password", label: "Change Password" },
  ];

  return (
    <div
      className="min-h-screen w-full bg-[#F0F0F0] px-4 py-10"
      style={{ fontFamily: '"Rethink Sans", sans-serif' }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {/* ── Avatar Card ── */}
        <div className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
              {avatarPreview || profile?.avatar ? (
                <img
                  src={avatarPreview || profile?.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#08203C] flex items-center justify-center text-white text-3xl font-bold">
                  {profile?.full_name?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
            </div>
            {/* Upload button */}
            <label className="absolute bottom-0 right-0 w-8 h-8 bg-[#08203C] rounded-full flex items-center justify-center cursor-pointer shadow-md hover:opacity-80 transition-opacity">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" /> 
              </svg>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
                disabled={isAvatarLoading}
              />
            </label>
          </div>

          {/* Name + Email */}
          <div className="flex flex-col gap-1 text-center sm:text-left flex-1">
            <h2 className="text-[#1F1F1F] text-xl font-bold m-0">
              {profile?.full_name || "User"}
            </h2>
            <p className="text-[#595959] text-sm m-0">{profile?.email || ""}</p>
            {profile?.role && (
              <span className="inline-block mt-1 px-3 py-1 rounded-full bg-[#08203C]/10 text-[#08203C] text-xs font-semibold w-fit mx-auto sm:mx-0">
                {profile.role}
              </span>
            )}
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-200 text-red-500 text-sm font-semibold hover:bg-red-50 transition-all duration-200 cursor-pointer bg-transparent"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        </div>

        {/* ── Tabs ── */}
        <div className="flex gap-2 bg-[#FAFAFA] p-1.5 rounded-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer border-none ${
                activeTab === tab.key
                  ? "bg-[#08203C] text-white shadow-md"
                  : "bg-transparent text-[#595959] hover:text-[#08203C]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Profile Tab ── */}
        {activeTab === "profile" && (
          <form
            onSubmit={handleProfileSave}
            className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-8 flex flex-col gap-5"
          >
            <h3 className="text-[#1F1F1F] text-lg font-bold m-0">
              Personal Information
            </h3>

            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0B1714] text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                value={profileForm.full_name}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, full_name: e.target.value })
                }
                placeholder="Your full name"
                className={inputBase}
              />
            </div>

            {/* Email — read only */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0B1714] text-sm font-semibold">
                Email Address
              </label>
              <input
                type="email"
                value={profile?.email || ""}
                readOnly
                className="w-full outline-none px-4 py-3.5 rounded-xl border border-[#E2E6EF] bg-[#F5F5F5] text-[#888] text-[15px] cursor-not-allowed"
                placeholder="your@email.com"
              />
            </div>

            {/* Social Links */}
            <h3 className="text-[#1F1F1F] text-lg font-bold m-0 mt-2">
              Social Links
            </h3>

            {[
              {
                key: "linkedin",
                label: "LinkedIn",
                placeholder: "https://linkedin.com/in/username",
              },
              {
                key: "github",
                label: "GitHub",
                placeholder: "https://github.com/username",
              },
              {
                key: "twitter",
                label: "Twitter / X",
                placeholder: "https://x.com/username",
              },
            ].map((field) => (
              <div key={field.key} className="flex flex-col gap-2">
                <label className="text-[#0B1714] text-sm font-semibold">
                  {field.label}
                </label>
                <input
                  type="url"
                  value={profileForm[field.key]}
                  onChange={(e) =>
                    setProfileForm({
                      ...profileForm,
                      [field.key]: e.target.value,
                    })
                  }
                  placeholder={field.placeholder}
                  className={inputBase}
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={isUpdating}
              className="w-full py-4 rounded-full bg-[#08203C] text-white text-base font-semibold border-none cursor-pointer hover:opacity-90 transition-opacity duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {isUpdating ? "Saving..." : "Save Changes"}
            </button>
          </form>
        )}

        {/* ── Password Tab ── */}
        {activeTab === "password" && (
          <form
            onSubmit={handlePasswordChange}
            className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-8 flex flex-col gap-5"
          >
            <h3 className="text-[#1F1F1F] text-lg font-bold m-0">
              Change Password
            </h3>

            {[
              {
                key: "old_password",
                label: "Current Password",
                show: showOld,
                setShow: setShowOld,
              },
              {
                key: "new_password",
                label: "New Password",
                show: showNew,
                setShow: setShowNew,
              },
              {
                key: "confirm_password",
                label: "Confirm New Password",
                show: showConfirm,
                setShow: setShowConfirm,
              },
            ].map((field) => (
              <div key={field.key} className="flex flex-col gap-2">
                <label className="text-[#0B1714] text-sm font-semibold">
                  {field.label}
                </label>
                <div className="relative w-full">
                  <input
                    type={field.show ? "text" : "password"}
                    value={passwordForm[field.key]}
                    onChange={(e) =>
                      setPasswordForm({
                        ...passwordForm,
                        [field.key]: e.target.value,
                      })
                    }
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    required
                    className={`${inputBase} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => field.setShow(!field.show)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#08203C] transition-colors bg-transparent border-none cursor-pointer p-0"
                  >
                    {field.show ? (
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
              </div>
            ))}

            <button
              type="submit"
              disabled={isChangingPassword}
              className="w-full py-4 rounded-full bg-[#08203C] text-white text-base font-semibold border-none cursor-pointer hover:opacity-90 transition-opacity duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {isChangingPassword ? "Changing..." : "Change Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
