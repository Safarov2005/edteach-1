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

  return (
    <main className={styles.page}>
      <section className={styles["page-section"]}>
        <section className={styles["first-section"]}>
          <div className={styles.banner}>
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
                <a href="/">
                  {isLanguageEnglish
                    ? "Check public quizes"
                    : "Ommaviy testlar"}
                </a>
              </button>
            </div>
            <img src={img2} alt="" className={styles["banner-image"]} />
          </div>
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
