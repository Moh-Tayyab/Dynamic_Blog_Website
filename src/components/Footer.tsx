import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] text-[#000000] font-poppins">
      <div className="container pl-6 pr-8 py-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Logo and Address Section */}
          <div className="w-full md:w-[25%] mb-6 md:mb-0">
            <Link href={'/'} className="flex items-center md:justify-start justify-center">
              <h2 className="text-[26px] font-[700] leading-[36px] font-serif">TechTails.</h2>
            </Link>
            <p className="mt-4 text-[16px] font-[400] leading-[24px] text-[#9F9F9F]">
            Exploring the frontiers of artificial <br /> intelligence and its impact on our <br /> world.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-[15%] mb-6 md:mb-0 ml-10 px-4">
            <h2 className="text-[16px] font-[500] leading-[24px] text-[#9F9F9F] mb-8">Links</h2>
            <nav className="list-none space-y-8">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:underline">
                 Articles
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  About
                </Link>
              </li>
            </nav>
          </div>

          {/* Help Section */}
          <div className="w-full md:w-[16%] mb-6 md:mb-0 px-4">
            <h2 className="text-[16px] font-[500] leading-[24px] text-[#9F9F9F] mb-8">Resouces</h2>
            <nav className="list-none space-y-6">
              <li>
                <Link href="/" className="hover:underline">
                Documentation
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                Tutorials
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                Support
                </Link>
              </li>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-[35%] px-4">
            <h2 className="text-[16px] font-[500] leading-[24px] text-[#9F9F9F] mb-7">Newsletter</h2>
            <p className="text-[16px] font-[500] leading-[24px] text-[#000000] mb-8">
            Get Our Latest Update In Your Email. Subscribe now!
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="border-b-2 border-[#000000] focus:outline-none flex-grow text-sm font-[400] leading-[21px] py-1"
              />
              <button className="ml-4 font-[500] ms:text-[18px] lg:text-[18px] leading-[18px] text-[#000000] hover:scale-110 rounded-md  p-2 border">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t-2 border-[#D9D9D9] px-6">
        <div className="container py-4 mx-auto flex text-start items-start">
          <p className="text-[14px] font-[400] leading-[24px]">
          © 2024 TechTails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
