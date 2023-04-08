import React from "react";
import "./userinfo.css";
import userimg from "../../assets/user.jpg";
const Userinfo = () => {
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
          <img src={userimg} alt="user image" />
        </div>
        <span className="user-name">
          Mostafa Sayed <i class="is-online fa-solid fa-circle"></i>
        </span>
        <span className="user-role">
          Admin <i class="fa-solid fa-user-tie p-2"></i>
        </span>
      </div>
    </div>
  );
};

export default Userinfo;
