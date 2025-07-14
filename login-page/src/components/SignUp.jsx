import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import cubeImage from "../assets/cube.jpg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please log in.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError(error.message);
      }
    }
  };
  

  return (
    <div className="min-h-screen  flex flex-col md:flex-row p-8">
      {/* LEFT: Signup Form */}
      <div className="md:w-1/2  w-full relative left-[120px] flex flex-col justify-center  px-12 rounded-l-2xl py-12 bg-black">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-white">Create Account</h2>
          <p className="text-sm text-gray-300 mt-2">Sign up to get started</p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-5" autoComplete="off">
  <div>
    <label className="block text-sm text-gray-600">Email</label>
    <input
      type="email"
      autoComplete="off"
      placeholder="your@email.com"
      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <div>
    <label className="block text-sm text-gray-600">Password</label>
    <input
      type="password"
      autoComplete="new-password"
      placeholder="Create password"
      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>
  <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            SignUp
          </button>
</form>


        <div className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-600 hover:underline">
            Log In
          </Link>
        </div>
      </div>

      {/* RIGHT: Image */}
      <div className="md:w-1/3 relative left-[120px]  w-full flex items-center bg-black border-black rounded-r-2xl justify-center ">
        <img
          src={cubeImage}
          alt="cube"
          className="w-72 h-[300px]"
        />
      </div>
    </div>
  );
};

export default SignUp;
