import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
// import { GrFormClose } from "react-icons/gr";
import img1 from "./milliy_horijiy.jpg";
import img2 from "./meeting.jpg";
import img3 from "./studying-tips.jpeg";
import img4 from "./machiene.webp";
import img5 from "./listen.jpg";
import img6 from "./zoom.webp";

function UseFul() {
  const [activeDialog, setActiveDialog] = useState(false);

  const dialog = () => {
    setActiveDialog(true);
  };

  const CloseDialog = () => {
    setActiveDialog(false);
  };

  // const defaultButton =
  // 'rounded-xl py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50 ';

  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  return (
    <div className="container mx-auto">
      <ul className="container my-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-items-center w-fit px-5 md:px-0">
        {/* <Link to="/links"> </Link> */}
        <li
          onClick={dialog}
          className="snap-center cursor-pointer w-full md:w-[35vw] rounded-3xl"
        >
          <div className="relative flex-shrink-0 w-full">
            {/* <LazyLoadImage
              alt="project images"
              effect="blur"
              // height={image.height}
              src={img1} // use normal <img> attributes as props
              // width={image.width}
              className="absolute rounded-3xl inset-0 w-full h-full object-cover object-center"
            /> */}
            <img
              src={img1}
              className="absolute rounded-3xl inset-0 w-full h-full object-cover object-center"
              alt="project images"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
            <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
              <div>
                <p className="text-lg md:text-2xl font-medium text-white"></p>
                <h2 className="mt-3 w-2/3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  {isLanguageEnglish
                    ? "National and foreign scientific bases"
                    : "Milliy va xorijiy segmentdagi ilmiy bazalar"}
                </h2>
              </div>
            </div>
          </div>
        </li>

        <li className="snap-center w-full md:w-[35vw] rounded-3xl">
          <div className="relative flex-shrink-0 w-full">
            <img
              src={img6}
              className="absolute rounded-3xl inset-0 w-full h-full object-cover object-center"
              alt="project images"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
            <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
              <div>
                <p className="text-lg md:text-2xl font-medium text-white"></p>
                <h2 className="mt-3 w-2/3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  {isLanguageEnglish
                    ? "Online video communication"
                    : "Onlayn videoaloqa"}
                </h2>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="container my-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-items-center w-fit px-5 md:px-0">
        <li className="snap-center w-full md:w-[35vw] rounded-3xl">
          <div className="relative flex-shrink-0 w-full">
            <img
              src={img3}
              className="absolute rounded-3xl inset-0 w-full h-full object-cover object-center"
              alt="project images"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
            <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
              <div>
                <p className="text-lg md:text-2xl font-medium text-white"></p>
                <h2 className="mt-3 w-2/3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  {isLanguageEnglish ? "Home assignment" : "Uyga topshiriq"}
                </h2>
              </div>
            </div>
          </div>
        </li>

        <li className="snap-center w-full md:w-[35vw] rounded-3xl">
          <div className="relative flex-shrink-0 w-full">
            <img
              src={img2}
              className="absolute rounded-3xl inset-0 w-full h-full object-cover object-center"
              alt="project images"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
            <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
              <div>
                <p className="text-lg md:text-2xl font-medium text-white"></p>
                <h2 className="mt-3 w-2/3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  {isLanguageEnglish
                    ? "Show presentation"
                    : "Taqdimot namoyish etish"}
                </h2>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div
        className={
          activeDialog
            ? "fixed top-0 left-0  right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 "
            : "hidden"
        }
      >
        <div className="relative w-[80%]  h-auto  bg-[#111817] shadow-lg rounded-xl space-y-2">
          <div className="sticky z-20 top-0  right-0 flex items-center !text-white justify-between bg-[#111817 rounded-t-2xl shadow-sm py-4 px-6">
            <svg
              onClick={CloseDialog}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="cursor-pointer font-bold w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <ul className="pb-10 grid grid-cols-1 md:grid-cols-2 md:px-0 ">
            <Link to="/links">
              <li className="snap-center cursor-pointer w-full rounded-3xl px-1 sm:mt-0 mt-5">
                <div className="relative flex-shrink-0 w-full">
                  <img
                    src={img5}
                    className="absolute rounded-3xl inset-0 w-full h-full object-cover object-center"
                    alt="project images"
                  />
                  <div className="absolute inset-0 h-full w-[50%] bg-gradient-to-br from-black/30  rounded-3xl" />
                  <div className="relative h-64 md:h-96 w-[50%] py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                    <div>
                      <p className="text-lg md:text-2xl font-medium text-white"></p>
                      <h2 className="mt-3 w-2/3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                        {isLanguageEnglish
                          ? "Foreign scientific technical bases"
                          : "Xorijiy ilmiy texnik-bazalar"}
                      </h2>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
            <li className="snap-center w-[100%] rounded-3xl px-1 sm:mt-0 mt-5">
              <div className="relative flex-shrink-0 w-full">
                <img
                  src={img4}
                  className="absolute rounded-3xl inset-0 w-full h-full object-cover object-center"
                  alt="project images"
                />
                <div className="absolute inset-0 h-full w-[50%] bg-gradient-to-br from-black/30  rounded-3xl" />
                <div className="relative h-64 md:h-96 w-[50%]py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                  <div>
                    <p className="text-lg md:text-2xl font-medium text-white"></p>
                    <h2 className="mt-3 w-2/3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      {isLanguageEnglish
                        ? "Bases on scientific activities of national content"
                        : "Milliy kontentdagi ilmiy faoliyatiga doir bazalar"}
                    </h2>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UseFul;
