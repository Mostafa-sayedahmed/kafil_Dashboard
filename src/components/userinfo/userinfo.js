import React from "react";
import { useEffect, useState } from "react";
import "./userinfo.css";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Userinfo = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [userName, setUserName] = useState(user.fullname);
  const [userImg, setUserImg] = useState(user.imgUrl);

  useEffect(() => {
    setUserName(user.fullname);
    setUserImg(JSON.parse(localStorage.getItem("user")).imgUrl);
  }, [user]);

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('user');
    localStorage.setItem('isLogged', false);
    navigate('/');
  }


  return (
    <div className="user-info rounded">
      <div className="userinfo-header d-flex justify-content-between ">
        <div className="title">
          <i className="fa-solid fa-user"></i>
          <span>{t("my_account")}</span>
        </div>
        <button className="btn btn-light">
          <i className="fa-solid fa-gear"></i>
        </button>
      </div>
      <div className="userinfo-details">
        <div className="user-avatar">
          <img src={userImg} alt="user image" />
        </div>
        <span className="user-name">
          {userName} <i className="is-online fa-solid fa-circle"></i>
        </span>
        <span className="user-role">
        {t("admin")}<i className="fa-solid fa-user-tie p-2"></i>
        </span>

        <button
          className="btn btn-danger"
          onClick={() => {
            logOut();
          }}
        >
          {t("log_out")}
        </button>
      </div>
    </div>
  );
};

export default Userinfo;
