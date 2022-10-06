import React from "react";
import styles from "./home.module.css";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import img5 from "../../assets/img5.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header/Header";

function Home() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);

  return (
    <main className={styles.page}>
      <Header />
      <section className={styles["page-section"]}>
        <section className="my-10 md:my-16 lg:my-20">
          <ul className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-items-center w-fit px-5 md:px-0">
            <li className="snap-center w-full md:w-[35vw] rounded-3xl">
              <div className="relative flex-shrink-0 w-full">
                <img
                  src="https://blog.cambridgecoaching.com/hs-fs/hubfs/studying-1.jpg?width=1365&name=studying-1.jpg"
                  className="absolute rounded-3xl inset-0 w-full h-full object-cover object-center"
                  alt="project images"
                />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
                <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                  <div>
                    <p className="text-lg md:text-2xl font-medium text-white"></p>
                    <h2 className="mt-3 w-2/3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      {isLanguageEnglish
                        ? "Make learning awesome"
                        : "Biz bilan oson o`rganing!"}
                    </h2>
                  </div>
                  <Link to="/auth">
                    <a className="px-4 py-3 rounded-lg bg-white hover:bg-slate-100 active:bg-slate-300 ring-2 ring-gray-300 text-state-900 text-xs md:text-sm font-medium">
                      {isLanguageEnglish
                        ? "Sign up for free"
                        : "Bepul ro`yhatdan o`ting"}
                    </a>
                  </Link>
                </div>
              </div>
            </li>
            <li className="snap-center w-full md:w-[35vw] rounded-3xl">
              <div className="relative flex-shrink-0 w-full">
                <img
                  src="https://www.edgeip.com/images/FCK/Image/201812/Applying-to-university-college.jpg"
                  className="absolute rounded-3xl inset-0 w-full h-full object-cover object-center"
                  alt="project images"
                />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
                <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                  <div>
                    <p className="text-lg md:text-2xl font-medium text-white"></p>
                    <h2 className="mt-3 w-2/3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      {isLanguageEnglish
                        ? "Explore to public test"
                        : "Ommaviy bo`lgan barcha testlarga ega bo`ling."}
                    </h2>
                  </div>
                  <Link to="/quizes">
                    <a className="px-4 py-3 rounded-lg bg-white hover:bg-slate-100 active:bg-slate-300 ring-2 ring-gray-300 text-state-900 text-xs md:text-sm font-medium">
                      {isLanguageEnglish ? "Public quizes" : "Ommaviy testlar"}
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold uppercase my-10">
            {isLanguageEnglish ? "How it works" : "Sayt qanday ishlaydi"}
          </h1>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 justify-items-center w-fit px-20 md:px-0">
            <div className="relative my-5 w-[90vw] lg:w-[27rem] xl:w-[30rem] bg-white dark:bg-[#18191c] shadow-xl rounded-xl group">
              <div className="relative w-full rounded-xl">
                <img
                  className="rounded-xl object-cover object-top h-auto"
                  src="https://media.baamboozle.com/uploads/images/227903/1609388408_235498"
                  alt="card image"
                />
                <div className="absolute top-3 left-4 flex items-center space-x-2 cursor-pointer">
                  <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center  duration-200 space-x-1 hover:-translate-y-1">
                    <small className="text-blue-500">1</small>
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 rounded-b-xl w-full h-20 bg-white p-4 group-hover:h-24 duration-300">
                <h5 className="text-primary font-medium lg:font-semibold text-lg lg:text-left">
                  Testni yarating.
                </h5>
                <small className="text-xs font-light text-primary">
                  Testni yaratish uchun text
                </small>
              </div>
            </div>
            <div className="relative my-5 w-[90vw] lg:w-[27rem] xl:w-[30rem] bg-white dark:bg-[#18191c] shadow-xl rounded-xl group">
              <div className="relative w-full rounded-xl">
                <img
                  className="rounded-xl object-cover object-top h-auto"
                  src="https://static.foxnews.com/foxnews.com/content/uploads/2018/09/istock_000019850227_medium.jpg"
                  alt="card image"
                />
                <div className="absolute top-3 left-4 flex items-center space-x-2 cursor-pointer">
                  <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center  duration-200 space-x-1 hover:-translate-y-1">
                    <small className="text-blue-500">2</small>
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 rounded-b-xl w-full h-20 bg-white p-4 group-hover:h-24 duration-300">
                <h5 className="text-primary font-medium lg:font-semibold text-lg lg:text-left">
                  Yuklang va ulashing.
                </h5>
                <small className="text-xs font-light text-primary">
                  Yuklash boyicha yiriq noma
                </small>
              </div>
            </div>
            <div className="relative my-5 w-[90vw] lg:w-[27rem] xl:w-[30rem] bg-white dark:bg-[#18191c] shadow-xl rounded-xl group">
              <div className="relative w-full rounded-xl">
                <img
                  className="rounded-xl object-cover object-top h-auto"
                  src="https://vapingdaily.com/wp-content/uploads/2017/05/Quit-Smoking-E-mails-2.jpg"
                  alt="card image"
                />
                <div className="absolute top-3 left-4 flex items-center space-x-2 cursor-pointer">
                  <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center  duration-200 space-x-1 hover:-translate-y-1">
                    <small className="text-blue-500">3</small>
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 rounded-b-xl w-full h-20 bg-white p-4 group-hover:h-24 duration-300">
                <h5 className="text-primary font-medium lg:font-semibold text-lg lg:text-left">
                  Testni boshlash.
                </h5>
                <small className="text-xs font-light text-primary">
                  Do you want to participate?
                </small>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-10 md:my-16 space-x-4 md:space-x-10">
            <Link to="/auth">
                <a href="#_" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
                {isLanguageEnglish ? "Start right now" : "Hoziroq boshlang"}
                  <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
