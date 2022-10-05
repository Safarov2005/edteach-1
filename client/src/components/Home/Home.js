import React from "react";
import styles from "./home.module.css";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import img5 from "../../assets/img5.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);

  const scroll_cards_data = [
    {
      title: "Best trips to play with your best friends",
      img: "https://www.lendkey.com/wp-content/uploads/2021/05/croppedright-scaled.jpg",
    },
    {
      title: "Best trips to play with your best friends",
      img: "https://cdn.vox-cdn.com/thumbor/O8KNsY3Vz2jGdgjaT7w9rFqOStQ=/0x0:1680x945/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55398781/Zella_Apartments_01_.0.jpg",
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles["page-section"]}>
        <section className="my-10 md:my-16 lg:my-20">
          {/* <div className={styles.banner}>
            <div className={styles["banner-body"]}>
              <h2 className={styles["banner-title"]}>
                {isLanguageEnglish ? "Make learning awesome" : "Oson o`rganing"}
              </h2>
              <button className={styles["banner-button"]}>
                <Link to="/auth">
                  {isLanguageEnglish
                    ? "Sign up for free"
                    : "Bepul ro`yhatdan o`ting"}
                </Link>
              </button>
            </div>
            <img src={img1} alt="" className={styles["banner-image"]} />
          </div>
          <div className={styles.banner}>
            <div className={styles["banner-body"]}>
              <h2 className={styles["banner-title"]}>
                {isLanguageEnglish ? "Explore content" : "Testlarga o`tish"}
              </h2>
              <button className={styles["banner-button"]}>
                <Link to="/quizes">
                  {isLanguageEnglish ? "Public quizes" : "Ommaviy testlar"}
                </Link>
              </button>
            </div>
            <img src={img2} alt="" className={styles["banner-image"]} />
          </div> */}
          <ul className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-items-center w-fit px-10 md:px-0">
            <li className="snap-center w-full md:w-[35vw] rounded-3xl">
              <div className="relative flex-shrink-0 w-full">
                <img
                  src="https://blog.cambridgecoaching.com/hs-fs/hubfs/studying-1.jpg?width=1365&name=studying-1.jpg"
                  className="absolute rounded-3xl inset-0 w-full h-full object-cover object-center"
                  alt="project images"
                />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
                <div className="relative h-64 md:h-96 w-[768px] p-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
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
                <div className="relative h-64 md:h-96 w-[768px] p-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
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
        <section className={styles["second-section"]}>
          <div className={styles["section-background"]}></div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at school" : "Quizzly w szkole"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Engaging group and distance learning for Ustozs and Talabas."
                  : "Angażująca nauka grupowa i na odległość dla nauczycieli i uczniów."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Ko`proq ma`lumot."} &gt;
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at work" : "Quizzly w pracy"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Deliver training, presentations, meetings and events in-person or on any video conferencing platform."
                  : "Realizuj szkolenia, prezentacje, spotkania i wydarzenia osobiście lub na dowolnej platformie do wideokonferencji."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Ko`proq ma`lumot."} &gt;
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at home" : "Quizzly w domu"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Learning Apps and games for family fun or home study."
                  : "Gry edukacyjne do rodzinnej zabawy lub nauki w domu."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Ko`proq ma`lumot."} &gt;
              </a>
            </div>
          </div>
        </section>
        <section className={styles["third-section"]}>
          <h1>
            {isLanguageEnglish
              ? "How does Quizzly work?"
              : "Sayt qanday ishlaydi?"}
          </h1>
          <div className={styles["card-container"]}>
            <div className={styles.card}>
              <img src={img3} alt="" />
              <div className={styles["card-body"]}>
                <h1>{isLanguageEnglish ? "Create" : "Testni yarating."}</h1>
                <p>
                  {isLanguageEnglish
                    ? "It only takes minutes to create a learning game or trivia quiz on any topic, in any language."
                    : "Stworzenie quizu na dowolny temat, w dowolnym języku zajmuje tylko kilka minut."}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <img src={img4} alt="" />
              <div className={styles["card-body"]}>
                <h1>
                  {isLanguageEnglish ? "Host or share" : "Yuklang va ulashing."}
                </h1>
                <p>
                  {isLanguageEnglish
                    ? "Host a live game with questions on a big screen or share a game with remote players."
                    : "Przeprowadź grę na żywo z pytaniami na dużym ekranie lub udostępnij gra ze zdalnymi graczami."}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <img src={img5} alt="" />
              <div className={styles["card-body"]}>
                <h1>{isLanguageEnglish ? "Play" : "O`yin"}</h1>
                <p>
                  {isLanguageEnglish
                    ? "Game on! Join a kahoot with a PIN provided by the host and answer questions on your device."
                    : "O`yin dalej! Dołącz do kahoot za pomocą kodu PIN dostarczonego przez gospodarza i odpowiadać na pytania na swoim urządzeniu."}
                </p>
              </div>
            </div>
          </div>
          <div className={styles["card-button"]}>
            {isLanguageEnglish
              ? "Play Quizzly to see how it works."
              : "Testlarni yechib buni qanday ishlashini bilib oling."}{" "}
            &nbsp;
            <a href="/">
              {isLanguageEnglish
                ? "Explore our public quizes"
                : "Bizning ommaviy testlarimizga o`ting"}
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
