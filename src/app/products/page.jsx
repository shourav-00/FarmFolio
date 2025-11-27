"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { GiFarmer } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDescription } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";

const Page = () => {
  const [products, setProducts] = useState([]);
  const { data: session, status } = useSession();
  const user = session?.user;
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:5000/myproducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);


  if(status=='loading'){
        return <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-bars loading-lg"></span>
<span className="loading loading-bars loading-xl"></span>
        </div>
    }

  const handleProduct = (id) => {
    router.push("/manage-products");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {user ? (
        <>
          
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg rounded-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="flex flex-col sm:flex-row justify-between items-center py-8 mt-5 p-5">
                <div className="text-center sm:text-left mb-6 sm:mb-0 ">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Your Products
                  </h1>
                  <p className="text-green-100 text-lg font-semibold">
                    {products.length} {products.length === 1 ? "item" : "items"}{" "}
                    in your collection
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/add-product">
                    <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center gap-2">
                      <span className="text-xl">
                        <BiAddToQueue />
                      </span>
                      Add New Item
                    </button>
                  </Link>
                  <Link href="/marketplace">
                    <button className="border-2 border-white text-white hover:bg-green-800 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2">
                      <span>
                        <TbLogout2 className="w-5 h-5" />
                      </span>
                      Back to Marketplace
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Products List */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {products.map((product, index) => (
              <div key={product._id} className="mb-16 last:mb-0">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-gray-200 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 p-8 border border-green-100">
                  {/* Product Image */}
                  <div className="w-full lg:w-[45%] xl:w-[40%]">
                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100">
                      <img
                        className="w-full h-72 lg:h-96 object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                        src={product.image || user.image}
                        alt={product.title}
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="w-full lg:w-[55%] xl:w-[60%] space-y-6 flex-wrap">
                    {/* Title and Price */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-0">
                        {product.title}
                      </h1>
                      <div className="flex items-baseline gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl shadow-lg pt-2">
                        <span className="text-2xl font-bold">
                          {product.price}
                        </span>
                        <span className="font-semibold">Tk</span>
                      </div>
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 shadow-md border border-green-100">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <span className=" ">
                              <GiFarmer className="w-8 h-8" />
                            </span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">
                              Harvest Date
                            </p>
                            <p className="font-bold text-gray-900 text-lg">
                              {product.harvestDate}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 shadow-md border border-green-100">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <span className="text-green-600">
                              <MdOutlineProductionQuantityLimits className="w-8 h-8" />
                            </span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">
                              Quantity
                            </p>
                            <p className="font-bold text-gray-900 text-lg">
                              {product.quantity} {product.unit}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 shadow-md border border-green-100">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <span className="text-green-600">
                              <BiSolidCategory className="w-8 h-8" />
                            </span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">
                              Category
                            </p>
                            <p className="font-bold text-gray-900 text-lg capitalize">
                              {product.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 shadow-md border border-green-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-xl">
                          <span className="text-green-600 text-xl">
                            <FaLocationDot className="w-8 h-8" />
                          </span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">
                            Farm Location
                          </p>
                          <p className="font-bold text-gray-900 text-lg">
                            {product.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Descriptions */}
                    <div className="space-y-4 flex-wrap">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border border-green-100 ">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2 flex-wrap wrap-break-word">
                          <span className="text-green-600">
                            {" "}
                            <MdOutlineDescription className="w-8 h-8" />
                          </span>
                          Short Description
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {product.shortDescription}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border border-green-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2 ">
                          <span className="text-green-600">
                            <MdDescription className="w-8 h-8" />
                          </span>
                          Full Description
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg break-words">
                          {product.fullDescription}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button
                        onClick={() => handleProduct()}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-8 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
                      >
                        <span>
                          <MdOutlineManageHistory className="w-8 h-8" />
                        </span>
                        Manage Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Enhanced Empty State */}
            {products.length === 0 && (
              <div className="text-center py-20 bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl border border-green-200">
                <div className="max-w-lg mx-auto">
                  <div className="text-8xl mb-6">🌱</div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    No Products Yet
                  </h3>
                  <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                    Your product collection is empty. Start growing your farm
                    portfolio by adding your first product!
                  </p>
                  <Link href="/add-product">
                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-12 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
                      🌟 Add Your First Product
                    </button>
                  </Link>
                </div>
              </div>
            )}
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
              Please login to view and manage your products
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

export default Page;
