import React from "react";
import Dashboardtn from "../dashboardbtn/dashboardtn";
import "./sidebar.css";
import Container from "react-bootstrap/Container";
import logo from "../../assets/Logo.png";
import bggraph1 from "../../assets/wave (1).svg";
import bggraph2 from "../../assets/wave (2).svg";
import bggraph3 from "../../assets/wave (3).svg";
import Userinfo from "./../userinfo/userinfo";

export default function Sidebar() {
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
          <h4> لوحة التحكم</h4>
          <button className="btn btn-light">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="sidebar-btns">
          <Dashboardtn
            route="/home"
            btnName="الرئيسية"
            btnIcon="fa-solid fa-house "
          />
          <Dashboardtn
            route="/balance"
            btnName="الرصيد"
            btnIcon="fa-solid fa-money-bill-1"
          />

          <Dashboardtn
            route="#"
            btnName="الإعدادات"
            btnIcon="fa-solid fa-gear"
          />
          <Dashboardtn
            route="/serves"
            btnName="الخدمات"
            btnIcon="fa-solid fa-shop"
          />
          <Dashboardtn
            route="/Contest"
            btnName="المسابقات"
            btnIcon="fa-solid fa-trophy"
          />
          <Dashboardtn
            route="/project"
            btnName="المشاريع"
            btnIcon="fa-solid fa-suitcase "
          />
          <Dashboardtn
            route="/portfolio"
            btnName="الأعمال"
            btnIcon="fa-regular fa-images"
          />
          <Dashboardtn
            route="/chat"
            btnName="محادثات"
            btnIcon="fa-solid fa-comment-dots"
          />
          <Dashboardtn
            route="/questions"
            btnName="الملتقي"
            btnIcon="fa-solid fa-comments"
          />
          <Dashboardtn
            route="/users"
            btnName="الأعضاء"
            btnIcon="fa-solid fa-users"
          />
          <Dashboardtn
            route="/staff"
            btnName="الموظفون"
            btnIcon="fa-solid fa-user-tie "
          />
        </div>
      </div>
    </div>
  );
}
