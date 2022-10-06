import React from "react";
import { useSelector } from "react-redux";

function Footer() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  return (
    <footer className="p-4 bg-[#111817] shadow-xl md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
            Quizzzy
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-50 sm:text-center">
        © 2022{" "}
        <a
          href="https://flowbite.com/"
          className="hover:underline text-green-500"
        >
          Al-jabr™
        </a>
        .{" "}
        {isLanguageEnglish
          ? "All rights reserved"
          : "Barcha huquqlar himoyalangan."}
      </span>
    </footer>
  );
}

export default Footer;
