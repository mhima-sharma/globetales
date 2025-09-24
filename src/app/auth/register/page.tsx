"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const gologin = () => {
    router.push("/auth/login");
  };

  // Optional: if you want to capture input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission / page reload
    // Here you can handle registration logic
    gologin(); // Navigate to login after registration
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/background-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">
        {/* Header */}
        <h2
          className="text-3xl font-bold mb-2 text-center"
          style={{ color: "#5C3A21" }}
        >
          Create a GlobeTales Account
        </h2>
        <p className="text-center mb-6" style={{ color: "#8C6A4A" }}>
          Join our travel community and share your adventures!
        </p>

        {/* Registration Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label
              className="block mb-1"
              htmlFor="name"
              style={{ color: "#5C3A21" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: "#8C6A4A" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              className="block mb-1"
              htmlFor="email"
              style={{ color: "#5C3A21" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: "#8C6A4A" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              className="block mb-1"
              htmlFor="password"
              style={{ color: "#5C3A21" }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: "#8C6A4A" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              className="block mb-1"
              htmlFor="confirmPassword"
              style={{ color: "#5C3A21" }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: "#8C6A4A" }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 py-2 rounded-lg font-semibold mt-2 transition shadow-md"
            style={{ backgroundColor: "#009688", color: "white" }}
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Signup Buttons */}
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition shadow-sm"
            style={{ borderColor: "#8C6A4A", color: "#5C3A21" }}
          >
            Sign up with Google
          </button>
        </div>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm" style={{ color: "#5C3A21" }}>
          Already have an account?{" "}
          <a
            href="/auth/login"
            style={{ color: "#009688" }}
            className="hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
