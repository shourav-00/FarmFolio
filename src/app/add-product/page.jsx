"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import toast from "react-hot-toast";

const AddProductPage = () => {
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

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState({});

  const { data: session, status } = useSession();
  const user = session?.user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "title":
        if (!value.trim()) error = "Title is required";
        else if (value.length < 3)
          error = "Title must be at least 3 characters";
        break;
      case "shortDescription":
        if (!value.trim()) error = "Short description is required";
        else if (value.length < 10)
          error = "Description must be at least 10 characters";
        break;
      case "price":
        if (!value) error = "Price is required";
        else if (parseFloat(value) <= 0) error = "Price must be greater than 0";
        break;
      case "harvestDate":
        if (!value) error = "Harvest date is required";
        else if (new Date(value) > new Date())
          error = "Harvest date cannot be in the future";
        break;
      case "category":
        if (!value) error = "Category is required";
        break;
      case "quantity":
        if (!value) error = "Quantity is required";
        else if (parseInt(value) <= 0)
          error = "Quantity must be greater than 0";
        break;
      case "location":
        if (!value.trim()) error = "Location is required";
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return !error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (key !== "image") {
        // Image is optional
        if (!formData[key] && key !== "image") {
          newErrors[key] = `${
            key.charAt(0).toUpperCase() + key.slice(1)
          } is required`;
          isValid = false;
        }
      }
    });

    // Additional validations
    if (formData.title && formData.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters";
      isValid = false;
    }

    if (formData.shortDescription && formData.shortDescription.length < 10) {
      newErrors.shortDescription =
        "Short description must be at least 10 characters";
      isValid = false;
    }

    if (formData.price && parseFloat(formData.price) <= 0) {
      newErrors.price = "Price must be greater than 0";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const title = e.target.title.value;
    const shortDescription = e.target.shortDescription.value;
    const fullDescription = e.target.fullDescription.value;
    const price = e.target.price.value;
    const harvestDate = e.target.harvestDate.value;
    const category = e.target.category.value;
    const quantity = e.target.quantity.value;
    const unit = e.target.unit.value;
    const image = e.target.image.value;
    const location = e.target.location.value;

    const prod = {
      title,
      shortDescription,
      fullDescription,
      price,
      harvestDate,
      category,
      quantity,
      unit,
      image,
      location,
    };
    //Api send data->POST
    fetch("https://farmfolio-server-api.vercel.app/addedItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prod),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        toast.success("Added successfully");
      })
      .catch((err) => {
     
        setIsLoading(false);
      });
  };

  const getInputClassName = (fieldName) => {
    const baseClasses =
      "w-full bg-gray-50 rounded-md border text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200";

    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClasses} border-red-500 ring-2 ring-red-200`;
    }

    return `${baseClasses} border-gray-300 hover:border-green-400`;
  };
  const router = useRouter();

  const redirectPage = () => {
    router.push("/login");
  };

  if (isLoading) {
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#e3fcee] p-4 sm:p-6 bg-[#e3fcee]">
      {user ? (
        <div className="w-full max-w-2xl bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-green-800 font-bold text-2xl sm:text-3xl mb-6 text-center">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Title */}
            <div>
              <label className="text-gray-700 block mb-2 font-semibold">
                Product Title *
              </label>
              <input
                type="text"
                placeholder="Enter product title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={getInputClassName("title")}
                disabled={isLoading}
              />
              {errors.title && touched.title && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.title}
                </p>
              )}
            </div>

            {/* Short Description */}
            <div>
              <label className="text-gray-700 block mb-2 font-semibold">
                Short Description *
              </label>
              <textarea
                placeholder="Brief description of your product"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                rows="2"
                className={getInputClassName("shortDescription")}
                disabled={isLoading}
              ></textarea>
              {errors.shortDescription && touched.shortDescription && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.shortDescription}
                </p>
              )}
            </div>

            {/* Full Description */}
            <div>
              <label className="text-gray-700 block mb-2 font-semibold">
                Full Description *
              </label>
              <textarea
                placeholder="Detailed description of your product"
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                rows="4"
                className={getInputClassName("fullDescription")}
                disabled={isLoading}
              ></textarea>
              {errors.fullDescription && touched.fullDescription && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.fullDescription}
                </p>
              )}
            </div>

            {/* Product Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Price */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Price (Tk) *
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  min="0"
                  step="0.01"
                  className={getInputClassName("price")}
                  disabled={isLoading}
                />
                {errors.price && touched.price && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.price}
                  </p>
                )}
              </div>

              {/* Harvest Date */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Harvest Date *
                </label>
                <input
                  type="date"
                  name="harvestDate"
                  value={formData.harvestDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={getInputClassName("harvestDate")}
                  disabled={isLoading}
                />
                {errors.harvestDate && touched.harvestDate && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.harvestDate}
                  </p>
                )}
              </div>
            </div>

            {/* Category and Priority Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={getInputClassName("category")}
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
                {errors.category && touched.category && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.category}
                  </p>
                )}
              </div>

              {/* Priority */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Priority *
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={getInputClassName("priority")}
                  disabled={isLoading}
                >
                  <option value="">Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                {errors.priority && touched.priority && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.priority}
                  </p>
                )}
              </div>
            </div>

            {/* Additional Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Quantity */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Quantity *
                </label>
                <input
                  type="number"
                  placeholder="Available quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  min="1"
                  className={getInputClassName("quantity")}
                  disabled={isLoading}
                />
                {errors.quantity && touched.quantity && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.quantity}
                  </p>
                )}
              </div>

              {/* Unit */}
              <div>
                <label className="text-gray-700 block mb-2 font-semibold">
                  Unit *
                </label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={getInputClassName("unit")}
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
                {errors.unit && touched.unit && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.unit}
                  </p>
                )}
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
                onBlur={handleBlur}
                className={getInputClassName("image")}
                disabled={isLoading}
              />
            </div>

            {/* Location */}
            <div>
              <label className="text-gray-700 block mb-2 font-semibold">
                Location *
              </label>
              <input
                type="text"
                placeholder="Enter your farm location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={getInputClassName("location")}
                disabled={isLoading}
              />
              {errors.location && touched.location && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.location}
                </p>
              )}
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
                    Adding Product...
                  </>
                ) : (
                  "Add Product"
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div onClick={redirectPage}>
          <div className="flex  justify-center items-center mt-4 mb-10">
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

export default AddProductPage;
