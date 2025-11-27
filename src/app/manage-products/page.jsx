"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
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
import {
  FaCalendarAlt,
  FaWeightHanging,
  FaTag,
  FaEdit,
  FaTrash,
  FaArrowLeft,
  FaPlus,
  FaLock,
  FaSeedling,
  FaStar,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Page = () => {
  const [products, setProducts] = useState([]);
  const { data: session, status } = useSession();
  const user = session?.user;
  const router=useRouter()

  useEffect(() => {
    fetch(`http://localhost:5000/myproducts`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleDelete = (id) => {
        fetch(`http://localhost:5000/manage-products/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('Deleted')
            setProducts(products.filter(product => product._id !== id));
            
        })
        .catch(err=>{
           toast.error(e.message);
        })
    }
  
    if(status=='loading'){
        return <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-bars loading-lg"></span>
<span className="loading loading-bars loading-xl"></span>
        </div>
    }
  const handleUpdate = (id) => {
    router.push(`/update/${id}`)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {user ? (
        <>
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg rounded-2xl mt-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-center py-8">
                <div className="text-center sm:text-left mb-6 sm:mb-0">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2 flex items-center gap-3">
                    <MdOutlineManageHistory className="w-8 h-8" />
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
                      <BiAddToQueue className="w-5 h-5" />
                      Add New Item
                    </button>
                  </Link>
                  <Link href="/marketplace">
                    <button className="border-2 border-white text-white hover:bg-green-800 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2">
                      <FaArrowLeft className="w-4 h-4" />
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
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 p-8 border border-green-100">
              
                  <div className="w-full lg:w-[45%] xl:w-[40%]">
                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100">
                      
                      <img
                        className="w-full h-72 lg:h-96 object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                        src={product.image || user.image }
                        alt={product.title} 
                      />
                      
                      
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="w-full lg:w-[55%] xl:w-[60%] space-y-6 ">
                    {/* Title and Price */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-0 ">
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
                            <FaCalendarAlt className="w-5 h-5 text-green-600" />
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
                            <FaWeightHanging className="w-5 h-5 text-green-600" />
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
                            <FaTag className="w-5 h-5 text-green-600" />
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
                          <FaLocationDot className="w-6 h-6 text-green-600" />
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
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border border-green-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="text-green-600">
                            <MdOutlineDescription className="w-6 h-6" />
                          </span>
                          Short Description
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg break-words">
                          {product.shortDescription}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border border-green-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="text-green-600">
                            <MdDescription className="w-6 h-6" />
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
                        onClick={() => handleUpdate(product._id)}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-8 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
                      >
                        <FaEdit className="w-5 h-5" />
                        Update Product
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="flex-1 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-4 px-8 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
                      >
                        <FaTrash className="w-5 h-5" />
                        Delete Product
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
                  <div className="text-6xl mb-6 text-green-500">
                    <FaSeedling className="w-20 h-20 mx-auto" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    No Products Yet
                  </h3>
                  <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                    Your product collection is empty. Start growing your farm
                    portfolio by adding your first product!
                  </p>
                  <Link href="/add-product">
                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-12 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2 mx-auto">
                      <FaStar className="w-5 h-5" />
                      Add Your First Product
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
            <div className="text-6xl mb-6 text-green-500">
              <FaLock className="w-16 h-16 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Access Required
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Please login to view and manage your products
            </p>
            <Link href="/login">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full flex items-center justify-center gap-2">
                <TbLogout2 className="w-5 h-5" />
                Login to Continue
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Page;
