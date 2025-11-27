"use client";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GiFarmer } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiRegeneration } from "react-icons/gi";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import {
  FaArrowLeft,
  FaMapPin,
  FaStar,
  FaCalendarAlt,
  FaDollarSign,
  FaShoppingCart,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";

const page = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { data: session, status } = useSession();

  const router = useRouter();

  const handleAddProduct = () => {
    router.push("/marketplace");
  };

  useEffect(() => {
    fetch(`https://farmfolio-server-api.vercel.app/marketplace/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  const handleBack = () => {
    router.back();
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      </div>
    );
  }

  const handleFarmer = () => {
    toast.success("Calling....");
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/marketplace">
              <button className="flex items-center gap-2 py-4 text-black hover:text-green-700 transition-colors">
                <IoArrowBackCircleSharp className="w-8 h-8" />
                <span className="font-semibold">Back </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="w-full lg:w-[60%] xl:w-[55%]">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  className="w-full h-auto object-cover rounded-2xl"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>

            <div className="w-full lg:w-[40%] xl:w-[45%] space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-black">
                  {product.price}
                </span>
                <span className="text- text-gray-900">Tk</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <GiFarmer className="w-8 h-8" />
                    <div>
                      <p className="text-sm text-gray-500">Harvest Date-</p>
                      <p className="font-semibold text-gray-900">
                        {product.createdAt}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <MdOutlineProductionQuantityLimits className="w-8 h-8" />
                    <div>
                      <p className="text-sm text-gray-500">Quantity-</p>
                      <p className="font-semibold text-gray-900">
                        {product.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="w-5 h-5 " />
                    <div>
                      <p className="text-sm text-gray-500">In Stock-</p>
                      {product.inStock === true ? (
                        <p className="font-semibold text-gray-900">Available</p>
                      ) : (
                        <p className="font-semibold text-gray-900">Finish</p>
                      )}

                      <p className="font-semibold text-gray-900">
                        {product.harvestDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <GiRegeneration className="w-8 h-8" />
                    <div>
                      <p className="text-sm text-gray-500">Rating-</p>
                      <p className="font-semibold text-gray-900">
                        {product.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleAddProduct}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                >
                  Add to Cart
                </button>

                <button
                  onClick={handleFarmer}
                  className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                >
                  Contact Farmer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
