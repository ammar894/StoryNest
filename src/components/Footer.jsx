import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-purple-50  border-t-3 border-gray-00">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap text-white">

          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center hover:scale-90 transition-transform duration-400
              hover:border-2 border-gray-600 rounded-xl p-1">
                <Logo className="h-27 w-85"></Logo>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  &copy; {new Date().getFullYear()} StoryNest. All rights reserved.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-6  font-semibold uppercase text-orange-600 tracking-widest">
                Company
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    to="/"
                    className="text-base font-medium text-black hover:text-orange-400 hover:drop-shadow-[0_0_8px_#fbbf24] transition duration-200"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/"
                    className="text-base font-medium text-black hover:text-orange-400 hover:drop-shadow-[0_0_8px_#fbbf24] transition duration-200"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/"
                    className="text-base font-medium text-black hover:text-orange-400 hover:drop-shadow-[0_0_8px_#fbbf24] transition duration-200"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-base font-medium text-black hover:text-orange-00 hover:text-orange-400 hover:drop-shadow-[0_0_8px_#fbbf24] transition duration-200"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

    
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-6  font-semibold uppercase text-yellow-500 tracking-widest">
                Support
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    to="/"
                    className="text-base font-medium text-black hover:text-yellow-300 hover:drop-shadow-[0_0_8px_#fde047] transition duration-200"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/"
                    className="text-base font-medium text-black hover:text-yellow-300 hover:drop-shadow-[0_0_8px_#fde047] transition duration-200"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/"
                    className="text-base font-medium text-black hover:text-yellow-300 hover:drop-shadow-[0_0_8px_#fde047] transition duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-base font-medium text-black hover:text-yellow-300 hover:drop-shadow-[0_0_8px_#fde047] transition duration-200"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

     
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="mb-6  font-semibold uppercase text-purple-400 tracking-widest">
                Legals
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    to="/"
                    className="text-base font-medium text-black hover:text-purple-300 hover:drop-shadow-[0_0_8px_#c084fc] transition duration-200"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/"
                    className="text-base font-medium text-black hover:text-purple-300 hover:drop-shadow-[0_0_8px_#c084fc] transition duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-base font-medium text-black hover:text-purple-300 hover:drop-shadow-[0_0_8px_#c084fc] transition duration-200"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Footer;
