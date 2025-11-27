"use client";

import { useSession } from "next-auth/react";

const PremiumFeature = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* If logged in */}
      {session ? (
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-green-800 font-bold">🌟 Premium Content</h3>
          <p>Welcome back, {session.user.name}!</p>

          <button className="bg-green-600 text-white px-4 py-2 mt-2 rounded">
            Access Feature
          </button>
        </div>
      ) : (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Please log in to access this feature</p>
        </div>
      )}
    </div>
  );
};

export default PremiumFeature;
