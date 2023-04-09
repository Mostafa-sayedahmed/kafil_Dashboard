import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

export default function Servicerow(props) {
  const [show, setShow] = useState(false);
  const [modalmsg, setmodalmsg] = useState(
    "هل انت متأكد من حذف الخدمة تماماً.؟,  اذا كنت تريد عدم عرض هذه الخدمة للمستخدمين يمكن تغيير الحالة الي مرفوض "
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
            نشط
          </>
        );
      case "pending":
        return (
          <>
            <i
              className="fa-regular fa-circle-dot ms-2"
              style={{ color: "orange" }}
            ></i>
            بانتظار المراجعه
          </>
        );
      case "deleted":
        return (
          <>
            <i
              className="fa-regular fa-circle-dot ms-2"
              style={{ color: "red" }}
            ></i>
            محذوف
          </>
        );

      default:
        break;
    }
  }
  return (
    <>
      <tr
        title="اضغط للمعاينة"
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
            Delete
          </button>
        </td>
      </tr>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>هل انت متأكد من حذف الخدمة</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>{modalmsg}</>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={togglemodal}>
            نعم,قم بالحذف!
          </Button>
          <Button variant="secondary" onClick={togglemodal}>
            رجوع
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
