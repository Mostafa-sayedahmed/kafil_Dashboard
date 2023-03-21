import React from "react";
import Dashboardtn from "../dashboardbtn/dashboardtn";
import "./sidebar.css";
import Container from "react-bootstrap/Container";
import logo from "../../assets/Logo.png";
import Userinfo from "./../userinfo/userinfo";

export default function Sidebar() {
  return (
    <div className="sidebar mt-3 ">
      <div className="logo-div d-flex justify-content-center">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
      <Userinfo />

      <div className=" d-flex flex-row justify-content-between align-items-center m-3 p-3">
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

        <Dashboardtn route="#" btnName="الإعدادات" btnIcon="fa-solid fa-gear" />
        <Dashboardtn
          route="/serves"
          btnName="الخدمات"
          btnIcon="fa-solid fa-shop"
        />
        <Dashboardtn
          route="/contests"
          btnName="المسابقات"
          btnIcon="fa-solid fa-trophy"
        />
        <Dashboardtn
          route="/projects"
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
  );
}
