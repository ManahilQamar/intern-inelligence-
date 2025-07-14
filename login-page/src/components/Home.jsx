import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [successMessage, setSuccessMessage] = useState(
    location.state?.success || ""
  );

  // Hide message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {successMessage && (
        <div className="bg-green-100 text-green-800 px-6 py-3 rounded mb-4 shadow-md">
          {successMessage}
        </div>
      )}
      <h1 className="text-3xl font-bold text-gray-800">🎉 Welcome!</h1>
      <p className="text-gray-600 mt-2">You are now logged in.</p>
    </div>
  );
};

export default Home;
