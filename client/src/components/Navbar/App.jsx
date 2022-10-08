import React from "react";
import { FaDev } from "react-icons/fa";

import styles from "./App.module.css";
import useNavigation from "../../hooks/useNavigation";
import navigationData from "../../data/navigation";

import Navbar from "./index";
import Tabbar from "./Tabbar/index";

const AppNavbar = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <div className="bg-gray-200 h-screen">
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div className="flex items-center justify-center text-5xl text-gray-300 h-5/6">
        <FaDev />
      </div>
    </div>
  );
};

export default AppNavbar;
