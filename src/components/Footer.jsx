// src/components/Footer.jsx

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-8 md:mb-">
            <h2 className="text-xl font-bold mb-2">JewelsCo</h2>
            <p className="text-sm pr-4">
              JewelsCo offers a wide range of exquisite jewelry. Explore our
              latest collections and find the perfect piece for you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-1">
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a href="/shop" className="hover:text-gray-400">
                  Shop
                </a>
              </li>
              <li className="mb-1">
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a href="/contact" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul>
              <li className="mb-1">
                <a href="/support" className="hover:text-gray-400">
                  Support
                </a>
              </li>
              <li className="mb-1">
                <a href="/faq" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li className="mb-1">
                <a href="/returns" className="hover:text-gray-400">
                  Returns
                </a>
              </li>
              <li className="mb-1">
                <a href="/shipping" className="hover:text-gray-400">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm mb-2">Phone: +91 12345 67890</p>
            <p className="text-sm mb-4">Email: support@jewelsco.com</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} JewelsCo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
