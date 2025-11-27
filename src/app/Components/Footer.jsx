import { MdOutlinePhoneCallback } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaRepublican } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">FF</span>
              </div>
              <h2 className="text-2xl font-bold">FarmFolio</h2>
            </div>
            <p className="text-green-100 mb-4 max-w-md">
              Connecting farmers with consumers for fresh, sustainable agriculture. 
              Join us in revolutionizing the way we grow, share, and enjoy farm-fresh produce.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <span className="text-lg"><FaHome /></span>
              </Link>
              <Link href="/marketplace" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <span className="text-lg"><FaRepublican /></span>
              </Link>
             
              <Link href="/products" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <span className="text-lg"><IoBagAdd /></span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-green-100 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/marketplace" className="text-green-100 hover:text-white transition-colors">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="/addproduce" className="text-green-100 hover:text-white transition-colors">
                  Sell Produce
                </a>
              </li>
              <li>
                <a href="/myorders" className="text-green-100 hover:text-white transition-colors">
                  My Orders
                </a>
              </li>
              <li>
                <a href="/about" className="text-green-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-lg"><PiFarm /></span>
                <span className="text-green-100">hello@farmfolio.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg"><MdOutlinePhoneCallback /></span>
                <span className="text-green-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg"><FaLocationDot /></span>
                <span className="text-green-100">123 Farm Street, Agriculture City</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🕒</span>
                <span className="text-green-100">Mon - Fri: 8AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-green-700">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-green-100">Subscribe to get latest updates about fresh produce and farming tips</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-green-700 border border-green-600 text-white placeholder-green-300 focus:outline-none focus:border-green-400 w-full lg:w-64"
              />
              <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-green-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-green-200 text-sm">
              © 2024 FarmFolio. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-green-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-green-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-green-200 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;