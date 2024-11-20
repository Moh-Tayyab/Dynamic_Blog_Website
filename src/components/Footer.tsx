import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-10">
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-cyan-500 tracking-widest text-sm mb-3">
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-400 hover:text-cyan-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-cyan-500 tracking-widest text-sm mb-3">
                INFORMATION
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    Second Link
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    Third Link
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    Fourth Link
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-cyan-500 tracking-widest text-sm mb-3">
                FOR BUSINESSES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    First Link
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    Second Link
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    Third Link
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-gray-400 hover:text-cyan-600">
                    Fourth Link
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-cyan-500 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-400">
                    Email Address*    
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-cyan-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded">
                  Submit
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Bitters chicharrones fanny pack
                <br className="lg:block hidden" />
                waistcoat green juice
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link
              href={"/"}
              className="flex title-font font-medium items-center md:justify-start justify-center text-cyan-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 text-white p-2 bg-cyan-600 rounded-full"
                viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-xl">TechTales</span>
            </Link>
            <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
              © 2024 TechTales —
              <Link
                href={"https://www.linkedin.com/in/ch-muhammad-tayyab/"}
                className="text-gray-500 hover:bg-cyan-600 ml-1"
                target="_blank"
                rel="noopener noreferrer">
                @Muhammad 
              </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              {/* Social Media Links */}
              <Link
                href="https://twitter.com/m_tayyab3366/"
                className="text-gray-400 hover:text-cyan-600">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ch-muhammad-tayyab/"
                className="ml-3 text-gray-400 hover:text-cyan-600">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100061613885111"
                className="ml-3 text-gray-400 hover:text-cyan-600">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
