import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold font-serif hover:text-gray-600 transition-colors">
              TechTails.
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Exploring the frontiers of artificial intelligence and its impact on our world.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:text-gray-600 transition-colors">
                Home
              </Link>
              <Link href="/articles" className="text-sm hover:text-gray-600 transition-colors">
                Articles
              </Link>
              <Link href="/about" className="text-sm hover:text-gray-600 transition-colors">
                About
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/documentation" className="text-sm hover:text-gray-600 transition-colors">
                Documentation
              </Link>
              <Link href="/" className="text-sm hover:text-gray-600 transition-colors">
                Tutorials
              </Link>
              <Link href="/" className="text-sm hover:text-gray-600 transition-colors">
                FAQ
              </Link>
              <Link href="/" className="text-sm hover:text-gray-600 transition-colors">
                Support
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm text-gray-600">
              Get our latest updates in your email. Subscribe now!
            </p>
            <form className="flex flex-col sm:flex-row gap-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} TechTails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;