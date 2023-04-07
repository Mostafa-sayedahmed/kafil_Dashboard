import React from "react";
import { useEffect, useState } from 'react';
import "./userinfo.css";
import { json } from "react-router-dom";
// import userimg from "../../assets/user.jpg";
const Userinfo = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  const [ userName , setUserName] = useState(user.displayName);
  const [ userImg , setUserImg] = useState(user.photoUR);

  useEffect(() => {
    setUserName(user.displayName);
    setUserImg(JSON.parse(localStorage.getItem('user')).photoURL);
  }, [user]);

  return (
    <div className="user-info rounded">
      <div className="userinfo-header d-flex justify-content-between ">
        <div className="title">
          <i class="fa-solid fa-user"></i>
          <span>حسابي</span>
        </div>
        <button className="btn btn-light">
          <i class="fa-solid fa-gear"></i>
        </button>
      </div>
      <div className="userinfo-details">
        <div className="user-avatar">
          <img src={userImg} alt="user image" />
        </div>
        <span className="user-name">
          {userName} <i class="is-online fa-solid fa-circle"></i>
        </span>
        <span className="user-role">
          Admin <i class="fa-solid fa-user-tie p-2"></i>
        </span>
      </div>
    </div>
  );
};

export default Userinfo;
