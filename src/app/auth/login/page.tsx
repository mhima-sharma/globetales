"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage() {
   const router = useRouter();
  
     const godash = (e: React.FormEvent) => {
    e.preventDefault(); // ⛔ stop form reload
    router.push("/globetales-dash");
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/background-image.png')", // same background style as dashboard
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: "#5C3A21" }}>
          Welcome to GlobeTales 🌍
        </h2>
        <p className="text-center mb-6" style={{ color: "#8C6A4A" }}>
          Share your journeys, explore new adventures!
        </p>

        {/* Login Form */}
        <form className="flex flex-col gap-4">
          {/* Email Input */}
          <div>
            <label className="block mb-1" htmlFor="email" style={{ color: "#5C3A21" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-teal-600"
              style={{ borderColor: "#8C6A4A" }}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-1" htmlFor="password" style={{ color: "#5C3A21" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: "#8C6A4A" }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={godash}
            className="px-4 py-2 rounded-lg font-semibold mt-2 transition shadow-md"
            style={{ backgroundColor: "#009688", color: "white" }}
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <a href="#" style={{ color: "#009688" }} className="hover:underline text-sm">
            Forgot password?
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition shadow-sm"
            style={{ borderColor: "#8C6A4A", color: "#5C3A21" }}
          >
            Login with Google
          </button>
        </div>

        {/* Signup Link */}
        <p className="mt-6 text-center text-sm" style={{ color: "#5C3A21" }}>
          Don’t have an account?{" "}
          <a href="/auth/register" style={{ color: "#009688" }} className="hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
