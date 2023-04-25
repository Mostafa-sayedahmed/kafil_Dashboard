import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function Servicerow(props) {

  const { t } = useTranslation();


  const [show, setShow] = useState(false);
  const [modalmsg, setmodalmsg] = useState(
    t("delete_the_service")
    );
  const navigate = useNavigate();

  function togglemodal() {
    setShow(!show);
  }
  function deleteservice() {}
  function navtoservice() {
    navigate("/services/" + props.serviceid);
  }
  function checkstate() {
    switch (props.State) {
      case "approved":
        return (
          <>
            <i
              className="fa-regular fa-circle-dot ms-2"
              style={{ color: "lightgreen" }}
            ></i>
            {t("approved")}
          </>
        );
      case "pending":
        return (
          <>
            <i
              className="fa-regular fa-circle-dot ms-2"
              style={{ color: "orange" }}
            ></i>
              {t("under_review")}
          </>
        );
      case "deleted":
        return (
          <>
            <i
              className="fa-regular fa-circle-dot ms-2"
              style={{ color: "red" }}
            ></i>
            {t("delete")}
          </>
        );

      default:
        break;
    }
  }
  return (
    <>
      <tr
        title={t("Click_view")}
        style={{ cursor: "pointer" }}
        onClick={navtoservice}
      >
        <th scope="row " className="ms-2">
          {props.hash}
        </th>
        <td className="text-nowrap p-2">
          {" "}
          <i
            className="fa-solid fa-list-check ms-2"
            style={{ color: "#9ca1ab" }}
          ></i>{" "}
          {props.NameProject}{" "}
        </td>
        <td className="text-nowrap p-2">
          <img
            src={props.userimg}
            alt="user avatar"
            style={{
              width: "30px",
              height: "30px",
              marginInline: "5px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          {props.NamePerson}
        </td>
        <td className="text-nowrap p-2">{checkstate()}</td>
        <td className="text-nowrap p-2">
          {" "}
          <i
            className="fa-regular fa-envelope ms-2"
            style={{ color: "#9ca1ab" }}
          ></i>{" "}
          {props.email}
        </td>
        <td className="text-nowrap p-2">
          <i
            className="fa-solid fa-money-bill-1-wave ms-2"
            style={{ color: " #9ca1ab" }}
          ></i>
          {props.budget}
        </td>
        <td>
          <button
            className="btn btn-outline-danger p-2 rounded"
            onClick={togglemodal}
          >
             {t("delete")}
          </button>
        </td>
      </tr>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{t("Are_you_sure")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>{modalmsg}</>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteservice}>
           {t("yes_delete")}
          </Button>
          <Button variant="secondary" onClick={togglemodal}>
          {t("back")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
