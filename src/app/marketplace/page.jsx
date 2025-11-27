"use client";
import React, { useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { PiFarm } from "react-icons/pi";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaStar, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: session, status } = useSession();
  const user = session?.user;

  useEffect(() => {
    fetch("https://farmfolio-server-api.vercel.app/marketplace")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoad(false);
      });
  }, []);

  if (load || status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  const handleFarmer = () => {
    alert("jjjj");
  };

  return (
    <div className="p-5">
      <div className="flex flex-col justify-center items-center mt-7 mb-10">
        {user ? (
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">
              Welcome back, {user.name}!
            </h2>
            <p className="text-green-800 text-lg md:text-xl leading-relaxed mb-6">
              Thanks for trusting us. We always ensure <br />
              <span className="font-semibold">
                safe, organic, and farm-fresh delivery.
              </span>
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="rounded-2xl bg-[#dcfce8] p-8 md:p-10 lg:p-12">
            <div className="flex flex-col justify-center items-center ">
              <p className="text-center text-lg md:text-xl lg:text-2xl text-green-800 font-medium leading-relaxed md:leading-loose">
                We created{" "}
                <span className="font-bold text-green-900">FarmFolio</span> to
                provide you, our fantastic loyal customers, with the opportunity
                for{" "}
                <span className="font-semibold text-green-900">
                  further benefits
                </span>{" "}
                every time you shop with us.
              </p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Link href="/register">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join now
                </button>
              </Link>
              <Link href="/login">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Log in
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Search Bar Section */}
      <div className="max-w-4xl mx-auto mb-8 px-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for fresh products, vegetables, fruits..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 pl-14 bg-white border border-green-300 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-900 placeholder-green-400 text-lg"
          />
          <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-green-500 text-xl" />
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products && products.length > 0 ? (
            products.map((item) => (
              <div
                key={item._id}
                className="bg-white border border-green-200 rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
              >
                {/* Large Image - Half of Card */}
                <div className="h-48 bg-gray-200">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1613295759649-e16cdcdf22fb?w=400&h=300&fit=crop";
                    }}
                  />
                </div>

                {/* Essential Details */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-green-900 font-bold text-lg mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-green-700 text-sm mb-2">
                      By {item.farmer}
                    </p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xl font-bold text-green-800">
                        ${item.price}
                        <span className="text-sm text-green-600">
                          /{item.unit}
                        </span>
                      </span>
                      <span className="text-sm text-green-600">
                        <FaStar /> {item.rating}
                      </span>
                    </div>
                  </div>
                  <Link href={`/marketplace/${item._id}`}>
                    <button className="bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition-all w-full">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col justify-center items-center bg-white text-green-900 rounded-2xl shadow-lg p-10 w-full border border-green-200">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
                No products found
              </h2>
              <p className="text-green-700 mb-6 text-center max-w-md">
                Check back later for fresh farm products.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Product Items Banner Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>

            <div className="relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 md:mb-8">
                  <span></span>
                  EXCLUSIVE OFFER
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  Fresh From Farm to Your Table
                </h2>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl text-green-100 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                  Discover our premium selection of farm-fresh products,
                  carefully curated for quality and taste.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <span className="text-2xl mb-2">
                      <TbTruckDelivery />
                    </span>
                    <span className="font-semibold">Free Delivery</span>
                    <span className="text-green-200 text-sm mt-1">
                      On orders over $50
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <span className="text-2xl mb-2">
                      <PiFarm />
                    </span>
                    <span className="font-semibold">Quality Guarantee</span>
                    <span className="text-green-200 text-sm mt-1">
                      Freshness assured
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <span className="text-2xl mb-2">
                      <MdOutlineVerified />
                    </span>
                    <span className="font-semibold">Organic Certified</span>
                    <span className="text-green-200 text-sm mt-1">
                      100% natural
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto text-lg flex items-center justify-center gap-2">
                    <span>🛒</span>
                    Shop Best Sellers
                  </button>
                  <button
                    onClick={handleFarmer}
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto text-lg flex items-center justify-center gap-2"
                  >
                    <span>
                      <MdOutlinePhoneCallback />
                    </span>
                    Contact Farmer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
