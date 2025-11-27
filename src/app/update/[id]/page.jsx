"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdateProductPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    harvestDate: "",
    category: "",
    priority: "",
    quantity: "",
    unit: "",
    image: "",
    location: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (id) {
      fetch(`https://farmfolio-server-api.vercel.app/addedItems/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData(data);
        })
        .catch((err) => {
          alert("Error loading product data");
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`https://farmfolio-server-api.vercel.app/update-products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        alert("Product updated successfully!");
        router.push("/products");
      })
      .catch((err) => {
        alert("Error updating product");
        setIsLoading(false);
      });
  };

  const redirectPage = () => {
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 bg-[#e3fcee]">
      {user ? (
        <div className="w-full max-w-2xl bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-green-800 font-bold text-2xl sm:text-3xl mb-6 text-center">
            Update Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Title */}
            <div>
              <label className="text-gray-700 block mb-2 font-semibold">
                Product Title
              </label>
              <input
                type="text"
                placeholder="Enter product title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-gray-50 rounded-md border border-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                disabled={isLoading}
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="text-gray-700 block mb-2 font-semibold">
                Short Description
              </label>
              <textarea
                placeholder="Brief description of your product"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                rows="2"
                className="w-full bg-gray-50 rounded-md border border-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                disabled={isLoading}
              ></textarea>
            </div>

            {/* Full Description */}
            <div>
              <label className="text-gray-700 block mb-2 font-semibold">
                Full Description
              </label>
              <textarea
                placeholder="Detailed description of your product"
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleChange}
                rows="4"
                className="w-full bg-gray-50 rounded-md border border-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                disabled={isLoading}
              ></textarea>
            </div>

            {/* Product Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Price */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Price (Tk)
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full bg-gray-50 rounded-md border border-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  disabled={isLoading}
                />
              </div>

              {/* Harvest Date */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Harvest Date
                </label>
                <input
                  type="date"
                  name="harvestDate"
                  value={formData.harvestDate}
                  onChange={handleChange}
                  className="w-full bg-gray-50 rounded-md border border-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Category and Priority Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-gray-50 rounded-md border border-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  disabled={isLoading}
                >
                  <option value="">Select Category</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fruits">Fruits</option>
                  <option value="grains">Grains</option>
                  <option value="dairy">Dairy Products</option>
                  <option value="poultry">Poultry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full bg-gray-50 rounded-md border border-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  disabled={isLoading}
                >
                  <option value="">Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            {/* Additional Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Quantity */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="Available quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full bg-gray-50 rounded-md border border-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  disabled={isLoading}
                />
              </div>

              {/* Unit */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Unit
                </label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className="w-full bg-gray-50 rounded-md border border-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  disabled={isLoading}
                >
                  <option value="">Select Unit</option>
                  <option value="kg">Kilogram (kg)</option>
                  <option value="g">Gram (g)</option>
                  <option value="piece">Piece</option>
                  <option value="dozen">Dozen</option>
                  <option value="liter">Liter</option>
                  <option value="bundle">Bundle</option>
                </select>
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="text-gray-700 block mb-2 font-semibold">
                Product Image URL
              </label>
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full bg-gray-50 rounded-md border border-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                disabled={isLoading}
              />
            </div>

            {/* Location */}
            <div>
              <label className="text-gray-700 block mb-2 font-semibold">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter your farm location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-gray-50 rounded-md border border-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                disabled={isLoading}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-green-600 text-white rounded-md px-8 py-3 font-semibold hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Updating Product...
                  </>
                ) : (
                  "Update Product"
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div onClick={redirectPage}>
          <div className="flex justify-center items-center mt-4 mb-10">
            <img
              className="rounded-sm"
              src="https://pipersfarm.com/cdn/shop/files/Pipers_Perks_sign_in_page_1.png?v=1719317314"
              alt="hehe"
            />
          </div>
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
        </div>
      )}
    </div>
  );
};

export default UpdateProductPage;
