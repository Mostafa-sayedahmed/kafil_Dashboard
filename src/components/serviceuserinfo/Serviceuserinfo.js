import React from "react";
import { useEffect, useState } from "react";
import "./userinfo.css";
import { json } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Serviceuserinfo = (props) => {
  const { t } = useTranslation();
  return (
    <div className="user-info rounded">
      <div className="userinfo-header d-flex justify-content-between ">
        <div className="title">
          <i className="fa-solid fa-user"></i>
          <span>{t("user_details")}</span>
        </div>
      </div>
      <div className="userinfo-details">
        <div className="user-avatar">
          <img
            src={props.userImg}
            alt="user image"
            style={{ height: "120px" }}
          />
        </div>
        <span className="user-name">
          {props.userName} <i className="is-online fa-solid fa-circle"></i>
        </span>
        <span className="user-role">
        {t("Email")}:{props.email}
          <i className="fa-regular fa-envelope p-2"></i>
        </span>
      </div>
    </div>
  );
};

export default Serviceuserinfo;
