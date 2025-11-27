"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEdit,
  FaShieldAlt,
  FaHistory,
  FaBox,
  FaSignOutAlt,
} from "react-icons/fa";

const UserProfilePage = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [userStats, setUserStats] = useState({
    totalProducts: 0,
    activeListings: 0,
    totalSales: 0,
    memberSince: "2024",
  });

  useEffect(() => {
    // Fetch user stats from your API
    fetch("https://farmfolio-server-api.vercel.app/user-stats")
      .then((res) => res.json())
      .then((data) => {
        setUserStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching user stats");
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  if (status == "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  const handleEditProfile = () => {
    router.push("/edit-profile");
  };

  const handleManageProducts = () => {
    router.push("/manage-products");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {user ? (
        <>
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg rounded-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-center py-8 mt-5 p-5">
                <div className="text-center sm:text-left mb-6 sm:mb-0">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                      {user.image ? (
                        <img
                          src={user.image}
                          alt={user.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      ) : (
                        <FaUser className="w-10 h-10 text-green-600" />
                      )}
                    </div>
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                        {user.name}
                      </h1>
                      <p className="text-green-100 text-lg">FarmFolio Member</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleEditProfile}
                    className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center gap-2"
                  >
                    <FaEdit className="w-5 h-5" />
                    Edit Profile
                  </button>
                  <Link href="/marketplace">
                    <button className="border-2 border-white text-white hover:bg-green-800 px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2">
                      <FaSignOutAlt className="w-5 h-5" />
                      Back to Marketplace
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Personal Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Personal Information Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
                  <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                    <FaUser className="w-6 h-6 text-green-600" />
                    Personal Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                        <FaUser className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p className="font-semibold text-gray-900">
                            {user.name}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                        <FaEnvelope className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-sm text-gray-500">Email Address</p>
                          <p className="font-semibold text-gray-900">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                        <FaPhone className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-sm text-gray-500">Phone Number</p>
                          <p className="font-semibold text-gray-900">
                            +1 (555) 123-4567
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                        <FaCalendarAlt className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-sm text-gray-500">Member Since</p>
                          <p className="font-semibold text-gray-900">
                            {userStats.memberSince}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <FaMapMarkerAlt className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-500">Farm Location</p>
                      <p className="font-semibold text-gray-900">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>

                {/* Farm Statistics Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
                  <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                    <FaBox className="w-6 h-6 text-green-600" />
                    Farm Statistics
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {userStats.totalProducts}
                      </div>
                      <p className="text-sm text-gray-600">Total Products</p>
                    </div>

                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {userStats.activeListings}
                      </div>
                      <p className="text-sm text-gray-600">Active Listings</p>
                    </div>

                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {userStats.totalSales}
                      </div>
                      <p className="text-sm text-gray-600">Total Sales</p>
                    </div>

                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        4.8★
                      </div>
                      <p className="text-sm text-gray-600">Customer Rating</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Quick Actions */}
              <div className="space-y-8">
                {/* Quick Actions Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-green-100">
                  <h2 className="text-xl font-bold text-green-900 mb-4">
                    Quick Actions
                  </h2>

                  <div className="space-y-3">
                    <button
                      onClick={handleManageProducts}
                      className="w-full flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-all duration-300 text-left"
                    >
                      <FaBox className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-gray-900">
                        Manage Products
                      </span>
                    </button>

                    <button className="w-full flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-all duration-300 text-left">
                      <FaHistory className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-gray-900">
                        Order History
                      </span>
                    </button>

                    <button className="w-full flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-all duration-300 text-left">
                      <FaShieldAlt className="w-5 h-5 text-green-600" />{" "}
                      {/* Changed to FaShieldAlt */}
                      <span className="font-semibold text-gray-900">
                        Account Security
                      </span>
                    </button>
                  </div>
                </div>

                {/* Recent Activity Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-green-100">
                  <h2 className="text-xl font-bold text-green-900 mb-4">
                    Recent Activity
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-700">
                        Added new product "Organic Tomatoes"
                      </p>
                      <span className="text-xs text-gray-500 ml-auto">
                        2 hours ago
                      </span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-700">
                        Updated product quantity for "Fresh Carrots"
                      </p>
                      <span className="text-xs text-gray-500 ml-auto">
                        1 day ago
                      </span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-700">
                        Received new order for "Farm Eggs"
                      </p>
                      <span className="text-xs text-gray-500 ml-auto">
                        2 days ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="text-center bg-white rounded-3xl shadow-2xl p-12 max-w-md mx-4 border border-green-200">
            <div className="text-6xl mb-6">🔒</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Access Required
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Please login to view your profile
            </p>
            <Link href="/login">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full">
                Login to Continue
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
