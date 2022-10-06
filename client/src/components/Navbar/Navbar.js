import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../../constants/actionTypes";



import { changeLanguage } from "../../actions/language";

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const socket = useSelector((state) => state.socket.socket);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/auth");
    setUser(null);
    socket.disconnect();
  };

  useEffect(() => {
    const token = user?.accessToken;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <header>
      <nav className="bg-white -mt-12 sticky top-0 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {user ? (
                <>
                  <li>
                    <Link
                      className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      aria-current="page"
                      to="/quizes"
                    >
                      {isLanguageEnglish ? "Public quizes" : "Ommaviy testlar"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/games/joingame"
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      {isLanguageEnglish ? "Pin Access" : "Pin orqali kirish"}
                    </Link>
                  </li>
                  {user.result.userType === "Ustoz" && (
                    <li>
                      <Link
                        to="/myquizes"
                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        {isLanguageEnglish ? "My Quizes" : "Testlarim"}
                      </Link>
                    </li>
                  )}
                  <li>
                    <li
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      onClick={logout}
                    >
                      {isLanguageEnglish ? "Log out" : "Chiqish"}
                    </li>
                  </li>
                  <li>
                    <Link
                      to="/auth"
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      {isLanguageEnglish ? "Log out" : "Chiqish"}
                    </Link>
                  </li>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {isLanguageEnglish ? "Log in" : "Kirish"}
                </Link>
              )}

              <li className={styles["nav__list-item"]}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

                {isLanguageEnglish ? "EN" : "UZ"}
                <ul className={styles["nav__list-item-drop"]}>
                  <li
                    onClick={() => {
                      dispatch(changeLanguage(!isLanguageEnglish));
                    }}
                  >
                    {isLanguageEnglish ? "O`zbek" : "English"}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className={styles.nav}>
        <div className={styles["menu-right"]}>
          <ul className={styles.nav__list}>
            <li className={styles["nav__list-logo"]}>
              <Link to="/" className={styles["logo-link"]}>
                <img src={logo} alt="logo" className={styles["logo-img"]} />
              </Link>
            </li>
            <li className={styles["nav__list-item"]}>
              {isLanguageEnglish ? "About" : "Haqida"}
            </li>
            <li className={styles["nav__list-item"]}>
              {isLanguageEnglish ? "Study" : "O`qish"}
              <ul className={styles["nav__list-item-drop"]}>
                <li>
                  <Link to="/quizes">
                    {isLanguageEnglish ? "Public quizes" : "Ommaviy testlar"}
                  </Link>
                </li>
                <li>
                  <Link to="/games/joingame">
                    {isLanguageEnglish ? "Test game" : "Test o`yini"}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles["menu-left"]}>
          <ul className={styles.nav__list}>
            {user ? (
              <>
                <li className={styles["nav__list-item"]}>
                  <Link to="/games/joingame">
                    {isLanguageEnglish ? "Play" : "O`ynang"}
                  </Link>
                </li>
                {user.result.userType === "Ustoz" && (
                  <li className={styles["nav__list-item"]}>
                    <Link to="/myquizes">
                      {isLanguageEnglish ? "My Quizes" : "Testlarim"}
                    </Link>
                  </li>
                )}

                <li onClick={logout} className={styles["nav__list-item"]}>
                  {isLanguageEnglish ? "Log out" : "Chiqish"}
                </li>
              </>
            ) : (
              <Link to="/auth" className={styles["nav__list-item"]}>
                {isLanguageEnglish ? "Log in" : "Kirish"}
              </Link>
            )}
            <li className={styles["nav__list-item"]}>
              <img src={globe} alt="" />
              {isLanguageEnglish ? "EN" : "UZ"}
              <ul className={styles["nav__list-item-drop"]}>
                <li
                  onClick={() => {
                    dispatch(changeLanguage(!isLanguageEnglish));
                  }}
                >
                  {isLanguageEnglish ? "O`zbek" : "English"}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav> */}
    </header>
  );
}

export default Navbar;
