import React from "react";
import "./sidebar.css";
import { Link } from 'react-router-dom';

import logo from "../../assets/Logo.png";
import bggraph1 from "../../assets/wave (1).svg";
import bggraph2 from "../../assets/wave (2).svg";
import bggraph3 from "../../assets/wave (3).svg";
import Userinfo from "./../userinfo/userinfo";

import { useTranslation } from "react-i18next";

export default function Sidebar() {

  const { t } = useTranslation();


  return (
    <div className="sidebarwrap mt-3 ">
      <img className="bg-img" src={bggraph3} alt="background" />
      <img className="bg-img" src={bggraph2} alt="background" />
      <img className="bg-img" src={bggraph1} alt="background" />
      <div className="sidebar mt-3 ">
        <div className="logo-div d-flex justify-content-center">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
        <Userinfo />

        <div className="control-panel-head d-flex flex-row justify-content-between align-items-center m-3 p-3">
          <h4>{t("dashboard")}</h4>
          <button className="btn btn-light">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="sidebar-btns">
          <Link className="dashboard-btn" to="/home">
            <i className="fa-solid fa-house"></i>
            <span>{t("home")}</span>
          </Link>

          <Link className="dashboard-btn" to="/services">
            <i className="fa-solid fa-shop"></i>
            <span>{t("services")}</span>
           
          </Link>
          <Link className="dashboard-btn" to="/Contest">
            <i className="fa-solid fa-trophy"></i>
            <span>{t("contests")}</span>
          </Link>

          <Link className="dashboard-btn" to="/projects">
            <i className="fa-solid fa-suitcase"></i>
            <span>{t("projects")}</span>
          </Link>

          <Link className="dashboard-btn" to="/portfolio">
            <i className="fa-regular fa-images"></i>
            <span>{t("works")}</span>
          </Link>

          <Link className="dashboard-btn" to="/users">
            <i className="fa-solid fa-users"></i>
            <span>{t("users")}</span>
          </Link>

          <Link className="dashboard-btn" to="/freelancers">
            <i className="fa-solid fa-user-tie"></i>
            <span>{t("freelancers")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
