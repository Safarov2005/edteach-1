import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
// import styles from "./navbar.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../../constants/actionTypes";

import { changeLanguage } from "../../actions/language";
// import { Select, Option } from "@material-tailwind/react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Navbarr() {
  const [openNav, setOpenNav] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const socket = useSelector((state) => state.socket.socket);
  // const [selectedClient, setSelectedClient] = useState([]);
  const [profile, setProfile] = useState(false);
  const [lang, setLang] = useState(false);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/auth");
    setUser(null);
    socket.disconnect();
  };

  const handeProfile = () => {
    setProfile(!profile);
  };
  const handeLang = () => setLang(!lang);

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

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const navList = (
    <div className={user ? "flex items-start   lg:items-center gap-[20px]" : "flex items-start flex-row-reverse  lg:items-center gap-[20px]"}>

      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {user ? (
          <>
            <li>
              <Link
                // className="block py-2 pr-4 pl-3 text-white hover:border-b-2 hover:border-white rounded md:bg-transparent dark:text-white transition"
                className={
                  url !== null
                    ? url == "/quizes"
                      ? "block relative  before:content-[''] before:bottom-0 before:absolute before:w-full before:h-[1.5px] before:bg-[white]  before:left-0  py-2 pr-4 pl-3 text-white  md:bg-transparent transition"
                      : "block relative  before:content-[''] before:bottom-0 before:absolute before:w-0 hover:before:w-full before:duration-300 hover:before:h-[1.5px] hover:before:bg-[white]  before:left-0  py-2 pr-4 pl-3   md:bg-transparent transition"
                    : ""
                }
                aria-current="page"
                to="/quizes"
              >
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
                >
                  <span className="flex items-center">
                    {isLanguageEnglish ? "Public quizes" : "Ommaviy testlar"}
                  </span>
                </Typography>
              </Link>
            </li>
            <li>
              <Link
                to="/games/joingame"
                className={
                  url !== null
                    ? url == "/games/joingame"
                      ? "block relative  before:content-[''] before:bottom-0 before:absolute before:w-full before:h-[1.5px] before:bg-[white]  before:left-0  py-2 pr-4 pl-3 text-white  md:bg-transparent transition"
                      : "block relative  before:content-[''] before:bottom-0 before:absolute before:w-0 hover:before:w-full before:duration-300 hover:before:h-[1.5px] hover:before:bg-[white]  before:left-0  py-2 pr-4 pl-3   md:bg-transparent "
                    : ""
                }
              >
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
                >
                  <span className="flex items-center">
                    {isLanguageEnglish ? "Pin Access" : "Pin orqali kirish"}
                  </span>
                </Typography>
              </Link>
            </li>
            <li>
              <Link
                to="/useful"
                className={
                  url !== null
                    ? url == "/useful" ? "block relative  before:content-[''] before:bottom-0 before:absolute before:w-full  before:h-[1.5px] before:bg-[white]  before:left-0  py-2 pr-4 pl-3 text-white  md:bg-transparent transition"
                      : "block relative  before:content-[''] before:bottom-0 before:absolute before:w-0 hover:before:w-full before:duration-300 hover:before:h-[1.5px] hover:before:bg-[white]  before:left-0  py-2 pr-4 pl-3   md:bg-transparent transition"
                    : ""
                }
              >
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
                >
                  <span className="flex items-center">
                    {isLanguageEnglish ? "Useful" : "Foydali"}
                  </span>
                </Typography>
              </Link>
            </li>
            {user.result.userType === "Ustoz" && (
              <li>
                <Link
                  to="/myquizes"
                  className={
                    url !== null
                      ? url == "/myquizes"
                        ? "block relative  before:content-[''] before:bottom-0 before:absolute before:w-full before:h-[1.5px] before:bg-[white]  before:left-0  py-2 pr-4 pl-3 text-white  md:bg-transparent transition"
                        : "block relative  before:content-[''] before:bottom-0 before:absolute before:w-0 hover:before:w-full before:duration-300 hover:before:h-[1.5px] hover:before:bg-[white]  before:left-0  py-2 pr-4 pl-3   md:bg-transparent transition"
                      : ""
                  }
                >
                  <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                  >
                    <span className="flex items-center">
                      {isLanguageEnglish ? "My Quizes" : "Testlarim"}
                    </span>
                  </Typography>
                </Link>
              </li>


            )}
          </>
        ) : (
          <Link
            to="/auth"
            className="block py-2 pr-4 pt-0 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <span className="flex items-center">
                {isLanguageEnglish ? "Log in" : "Kirish"}
              </span>
            </Typography>
          </Link>
        )}
      </ul>

      <div>
        <span className={user ? "flex cursor-pointer lg:mt-0 mt-[20px]   md:px-0 px-[16px]" : "flex lg:p-0 p-[12px] cursor-pointer md:px-0 px-[16px]"} onClick={handeLang}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <div>
            {isLanguageEnglish ? "EN" : "UZ"}
          </div>
        </span>
        <OutsideClickHandler
          onOutsideClick={() => {
            setLang(false);
          }}
        >
          <ul className={lang ? "visible" : "hidden bg-gray-100"}>
            <li
              className="cursor-pointer relative"
              onClick={() => {
                dispatch(changeLanguage(!isLanguageEnglish));
              }}
            >
              <span className="absolute top-0 left-0 lg:pl-[10px] pl-[18px]  bg-[#111817] opacity-[0.9] p-[10px]">{isLanguageEnglish ? "O`zbek" : "English"} <p>Ruscha</p> <p>Qozoqcha</p></span>
            </li>
          </ul>
        </OutsideClickHandler>
      </div>
    </div>
  );
  return (
    <Navbar className="bg-[#111817] opacity-90 sticky top-2 border-0 z-10 left-0 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link to="/">
            <span className="font-bold">Ed Teach</span>
          </Link>
        </Typography>

        <div className="hidden lg:block">{navList}</div>
        {user ? (
          <li className="flex lg:m-0  ml-auto py-2 pr-4 pl-3 text-gray-700">
            {user ? (
              <>
                <img
                  className={
                    profile
                      ? "rounded-[50%] md:w-10 w-7 cursor-pointer border-white"
                      : "md:w-10 w-7 rounded-[50%] cursor-pointer"
                  }
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  onClick={handeProfile}
                />

                <OutsideClickHandler
                  onOutsideClick={() => {
                    setProfile(false);
                  }}
                >
                  <div
                    className={
                      profile
                        ? "block text-center bg-[#111817] shadow-lg border absolute mt-12 right-12 w-48 bg-gray-100 py-2 text-xs rounded-lg"
                        : "hidden"
                    }
                  >
                    <ul>
                      <li className="py-1 hover:bg-[#111817] text-white transition-all rounded-sm">
                        {user.result.userName}
                      </li>
                      <li className="py-1 hover:bg-[#111817] text-white transition-all rounded-sm">
                        {user.result.firstName + " " + user.result.lastName}
                      </li>
                      <li className="py-1 hover:bg-[#111817] text-white transition-all rounded-sm">
                        {user.result.mail}
                      </li>

                      <li
                        onClick={logout}
                        className="py-1 hover:bg-red-700 cursor-pointer text-white transition-all rounded-sm"
                      >
                        {isLanguageEnglish ? "Log out" : "Chiqish"}
                      </li>
                    </ul>
                  </div>
                </OutsideClickHandler>
              </>
            ) : (
              ""
            )}
          </li>
        ) : (
          ""
        )}
        <IconButton
          variant="text"
          className="pb-5 pr-5 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 "
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav className={openNav ? "block !h-auto !opacity-[1]" : "hidden !h-0"} open={openNav}>
        <span className="mx-auto">{navList}</span>
      </MobileNav>
    </Navbar>
  );
}
