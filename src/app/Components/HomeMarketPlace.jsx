import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const HomeMarketPlace = () => {
  const [products, setProduct] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch("https://farmfolio-server-api.vercel.app/homemarketplace")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoad(false);
      });
  }, []);
  if (load) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return (
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
                <Link href={`marketplace/${item._id}`}>
                  <button className="bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition-all w-full">
                    View
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
  );
};

export default HomeMarketPlace;
