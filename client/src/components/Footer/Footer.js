import React from "react";
import styles from "./footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useSelector } from "react-redux";

function Footer() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  return (
    <footer class="p-4 bg-[#111817] shadow-xl md:px-6 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="#" class="flex items-center mb-4 sm:mb-0">
          <span class="self-center text-white text-2xl font-semibold whitespace-nowrap">
            Quizzzy
          </span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-gray-50 sm:text-center">
        © 2022{" "}
        <a href="https://flowbite.com/" class="hover:underline text-green-500">
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
