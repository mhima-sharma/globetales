"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            GlobeTales
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-blue-600 transition">
              Events
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            {/* <Link
              href="/auth/login"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Login
            </Link> */}
            {/* <Link
              href="/auth/register"
              className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            >
              Sign Up
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-4 pb-6 space-y-4">
          {/* <Link
            href="/"
            className="block text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link> */}
          {/* <Link
            href="/about"
            className="block text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link> */}
          {/* <Link
            href="/events"
            className="block text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link> */}
          {/* <Link
            href="/contact"
            className="block text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link> */}
          {/* <Link
            href="/auth/login"
            className="block px-4 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link> */}
          {/* <Link
            href="/auth/register"
            className="block px-4 py-2 rounded-md border border-blue-600 text-blue-600 text-center hover:bg-blue-50 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link> */}
        </div>
      )}
    </nav>
  );
}
