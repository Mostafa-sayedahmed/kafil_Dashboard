import React from "react";
import "./dashboardbtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Dashboardtn = (props) => {
  return (
    <>
      <a
        href={props.route}
        className="dashboard-btn d-flex justify-content-center align-items-center flex-column rounded-4"
      >
        <i class={props.btnIcon}></i>
        <p>{props.btnName}</p>
      </a>
    </>
  );
};

export default Dashboardtn;
