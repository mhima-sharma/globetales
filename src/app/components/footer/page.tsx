import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#5C3A21] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">🌍 GlobeTales</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Share your journeys, explore new adventures, and connect with
            travelers across the globe. Your stories make the world smaller and
            brighter.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/globetales-dash" className="hover:text-teal-400 transition">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/auth/login" className="hover:text-teal-400 transition">
                Login
              </a>
            </li>
            <li>
              <a href="/auth/register" className="hover:text-teal-400 transition">
                Sign Up
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-teal-400 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="hover:text-teal-400 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-teal-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-teal-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-teal-400 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#4A2E18] text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} GlobeTales. All rights reserved.
      </div>
    </footer>
  );
}
