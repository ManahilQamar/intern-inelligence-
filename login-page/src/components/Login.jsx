import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import cubeImage from "../assets/cube.jpg"; // Make sure image exists

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Login successful!");
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white p-6">
      {/* Left Image Side */}
      <div className="md:w-1/3 w-full flex items-center justify-center bg-black rounded-l-2xl py-[1px]">
        <img
          src={cubeImage}
          alt="cube"
          className="w-72 h-[445px] object-contain drop-shadow-2xl"
        />
      </div>

      {/* Right Form Side */}
      <div className="md:w-1/2 w-full flex flex-col justify-center px-12 py-10 bg-black rounded-r-2xl">
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-bold text-white">Welcome Back</h2>
          <p className="text-sm text-gray-300 mt-2">
            Login to access your dashboard
          </p>
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-3">{success}</p>}

        <form onSubmit={handleLogin} className="space-y-5" autoComplete="off">
          <div>
            <label className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="info@example.com"
              autoComplete="off"
              className="w-full mt-1 px-4 py-2 border border-gray-700 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              className="w-full mt-1 px-4 py-2 border border-gray-700 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="text-sm text-center mt-4 text-gray-300">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Sign Up
          </Link>
        </div>
        <div className="text-sm text-center mt-2">
          <Link
            to="/forgot-password"
            className="text-indigo-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
