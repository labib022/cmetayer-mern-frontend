import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateAvatarMutation,
} from "../redux/features/auth/authApi";
import { ProfileSkeleton } from "../components/common/Skeleton";

const LogoutModal = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onCancel} />
    <div className="relative z-10 w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6"
      style={{ fontFamily: '"Rethink Sans", sans-serif' }}>
      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.8">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-[#0B1714] text-xl font-semibold m-0">Logging out?</h3>
        <p className="text-[#595959] text-sm leading-relaxed m-0">
          Are you sure you want to log out? You'll need to sign in again to continue.
        </p>
      </div>
      <div className="flex gap-3 w-full">
        <button onClick={onCancel}
          className="flex-1 py-3 rounded-2xl border border-[#E2E6EF] bg-white text-[#0B1714] text-sm font-semibold hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
          No, Stay
        </button>
        <button onClick={onConfirm}
          className="flex-1 py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-colors duration-200 cursor-pointer border-none">
          Yes, Logout
        </button>
      </div>
    </div>
  </div>
);

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const { data: profileData, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const [updateAvatar, { isLoading: isAvatarLoading }] = useUpdateAvatarMutation();

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [profileForm, setProfileForm] = useState({
    full_name: "",
    linkedin: "",
    github: "",
    twitter: "",
  });

  const profile = profileData?.data || user;
  const baseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "").replace("/api", "");
  const displayName = profile?.name || profile?.full_name || "User";
  const rawAvatar = avatarPreview || profile?.avatar;
  const avatarUrl = rawAvatar?.startsWith("/media") ? `${baseUrl}${rawAvatar}` : rawAvatar;

  useEffect(() => {
    if (profile) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProfileForm({
        full_name: profile?.name || profile?.full_name || "",
        linkedin: profile?.linkedin || "",
        github: profile?.github || "",
        twitter: profile?.twitter || "",
      });
    }
  }, [profile, profileData]);

  const handleAvatarChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { toast.error("Image too large (max 5MB)"); return; }
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

  const handleLogoutConfirm = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  if (isLoading) return <ProfileSkeleton />;

  const inputBase =
    "w-full outline-none transition-all duration-200 px-4 py-3.5 rounded-xl border border-[#E2E6EF] bg-white text-[#1F1F1F] text-[15px] focus:border-[#08203C]";

  return (
    <div className="min-h-screen w-full bg-[#F0F0F0] px-4 py-10"
      style={{ fontFamily: '"Rethink Sans", sans-serif' }}>

      {showLogoutModal && (
        <LogoutModal onConfirm={handleLogoutConfirm} onCancel={() => setShowLogoutModal(false)} />
      )}

      <div className="max-w-3xl mx-auto flex flex-col gap-6">

        {/* Avatar Card */}
        <div className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
              {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[#08203C] flex items-center justify-center text-white text-3xl font-bold">
                  {displayName?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
            </div>
            <label className="absolute bottom-0 right-0 w-8 h-8 bg-[#08203C] rounded-full flex items-center justify-center cursor-pointer shadow-md hover:opacity-80 transition-opacity">
              <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <input type="file" accept="image/*" className="hidden"
                onChange={handleAvatarChange} disabled={isAvatarLoading} />
            </label>
          </div>

          <div className="flex flex-col gap-1 text-center sm:text-left flex-1">
            <h2 className="text-[#1F1F1F] text-xl font-bold m-0">{displayName}</h2>
            <p className="text-[#595959] text-sm m-0">{profile?.email || ""}</p>
            {profile?.joining_date && (
              <p className="text-[#888] text-xs m-0 mt-0.5">Joined {profile.joining_date}</p>
            )}
            {profile?.role && (
              <span className="inline-block mt-1 px-3 py-1 rounded-full bg-[#08203C]/10 text-[#08203C] text-xs font-semibold w-fit mx-auto sm:mx-0">
                {profile.role}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate("/change-password")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#08203C]/20 text-[#08203C] text-sm font-semibold hover:bg-[#08203C]/10 transition-all duration-200 cursor-pointer bg-transparent"
            >
              🔒 Change Password
            </button>
            <button
              onClick={() => setShowLogoutModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-200 text-red-500 text-sm font-semibold hover:bg-red-50 transition-all duration-200 cursor-pointer bg-transparent"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Logout
            </button>
          </div>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleProfileSave}
          className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-8 flex flex-col gap-5">
          <h3 className="text-[#1F1F1F] text-lg font-bold m-0">Personal Information</h3>

          <div className="flex flex-col gap-2">
            <label className="text-[#0B1714] text-sm font-semibold">Full Name</label>
            <input type="text" value={profileForm.full_name}
              onChange={(e) => setProfileForm({ ...profileForm, full_name: e.target.value })}
              placeholder="Your full name" className={inputBase} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#0B1714] text-sm font-semibold">Email Address</label>
            <input type="email" value={profile?.email || ""} readOnly
              className="w-full outline-none px-4 py-3.5 rounded-xl border border-[#E2E6EF] bg-[#F5F5F5] text-[#888] text-[15px] cursor-not-allowed" />
          </div>

          <h3 className="text-[#1F1F1F] text-lg font-bold m-0 mt-2">Social Links</h3>

          {[
            { key: "linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/in/username" },
            { key: "github", label: "GitHub", placeholder: "https://github.com/username" },
            { key: "twitter", label: "Twitter / X", placeholder: "https://x.com/username" },
          ].map((field) => (
            <div key={field.key} className="flex flex-col gap-2">
              <label className="text-[#0B1714] text-sm font-semibold">{field.label}</label>
              <input type="url" value={profileForm[field.key]}
                onChange={(e) => setProfileForm({ ...profileForm, [field.key]: e.target.value })}
                placeholder={field.placeholder} className={inputBase} />
            </div>
          ))}

          <button type="submit" disabled={isUpdating}
            className="w-full py-4 rounded-full bg-[#08203C] text-white text-base font-semibold border-none cursor-pointer hover:opacity-90 transition-opacity duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2">
            {isUpdating ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}