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
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-row"]}>
          <div className={styles["footer-column"]}>
            <h4>{isLanguageEnglish ? "About" : "Biz haqimizda"}</h4>
            <ul>
              <li>
                <a href="/">{isLanguageEnglish ? "Company" : "Firma"}</a>
              </li>
              <li>
                <a href="/">{isLanguageEnglish ? "Service" : "Hizmatlar"}</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">{isLanguageEnglish ? "Contact" : "Aloqa"}</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h4>{isLanguageEnglish ? "Application" : "Ilova"}</h4>
            <ul>
              <li>
                <a href="/">{isLanguageEnglish ? "At home" : "Uyda"}</a>
              </li>
              <li>
                <a href="/">{isLanguageEnglish ? "At school" : "Maktabda"}</a>
              </li>
              <li>
                <a href="/">{isLanguageEnglish ? "At work" : "Ishda"}</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h4>{isLanguageEnglish ? "Terms and conditions" : "Foydalanish shartlari"}</h4>
            <ul>
              <li>
                <a href="/">
                  {isLanguageEnglish ? "Terms and conditions" : "Foydalanish shartlari"}
                </a>
              </li>
              <li>
                <a href="/">
                  {isLanguageEnglish
                    ? "Privacy Policy"
                    : "Maxfiylik siyosati"}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h4>{isLanguageEnglish ? "Follow us" : "Bizni kuzatib boring"}</h4>
            <div className={styles["footer-social-links"]}>
              <a href="/">
                <FacebookIcon />
              </a>
              <a href="/">
                <TwitterIcon />
              </a>
              <a href="/">
                <InstagramIcon />
              </a>
              <a href="/">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
