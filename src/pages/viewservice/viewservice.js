import React, { useEffect } from "react";
import { useNavigate, useParams, Router } from "react-router-dom";
import { db } from "../../Firebase/Firebase";
import { Modal, Button, Form } from "react-bootstrap";

import {
  collection,
  getDocs,
  getDoc,
  Firestore,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import Serviceuserinfo from "./../../components/serviceuserinfo/Serviceuserinfo";

import Language from "../../components/Language/Language";

import { useTranslation } from "react-i18next";

const Viewservice = () => {
  const { t } = useTranslation();

  let params = useParams();
  const [details, setdetails] = useState({});
  const [categories, setcategories] = useState([]);
  const [newcategory, setnewcategory] = useState("");
  const [newstate, setnewstate] = useState("");
  const [featured, setfeatured] = useState();
  const [addons, setaddons] = useState([]);
  const [user, setuser] = useState({});
  const [imgs, setimgs] = useState([]);
  const [previewimg, setpreviewimg] = useState("");
  const [show, setShow] = useState(false);
  const [modalmsg, setmodalmsg] = useState(t("delete_the_service"));
  let navigate = useNavigate();
  async function getuser() {
    const docRef = doc(db, "users", details.userid);
    await getDoc(docRef).then((result) => {
      console.log(result.data());
    });
  }
  function togglemodal() {
    setShow(!show);
  }
  useEffect(() => {
    getservice();
  }, []);

  ///////////////update service////////////////
  async function updateservice() {
    if (newcategory != "") {
      const washingtonRef = doc(db, "services", params.serviceid);
      await updateDoc(washingtonRef, {
        category: newcategory,
      });
      console.log("new category updated");
    }
    if (newstate != "") {
      const washingtonRef = doc(db, "services", params.serviceid);
      await updateDoc(washingtonRef, {
        state: newstate,
      });
      console.log("new state updated");
    }
    if (featured != null) {
      const washingtonRef = doc(db, "services", params.serviceid);
      await updateDoc(washingtonRef, {
        isfeatured: featured,
      });
      console.log("new state updated");
    }
  }
  ///////////////delete service////////////////

  async function deleteservice() {
    await deleteDoc(doc(db, "services", params.serviceid));
    navigate("/services");
  }
  ///////////////get service data////////////////

  async function getservice() {
    const docRef = doc(db, "services", params.serviceid);
    await getDoc(docRef).then(async (result) => {
      setdetails(result.data());
      setimgs(result.data().imgs);
      setpreviewimg(result.data().mainImg);
      setaddons(result.data().addons);

      ///////////////ge user data////////////////
      const userdocRef = doc(db, "users", result.data().userid);
      await getDoc(userdocRef).then((data) => {
        setuser(data.data());
      });
      ///////////////get categories////////////////
      await getDocs(collection(db, "categories")).then((querySnapshot) => {
        let categoriesdata = [];
        querySnapshot.forEach(async (res) => {
          categoriesdata = [...categoriesdata, res.data()];
        });
        setcategories(categoriesdata);
      });
    });
  }
  return (
    <div>
      <Language />
      <div className="bg-white border border-secondary-subtle  rounded p-3">
        <div className="header d-flex justify-content-between">
          <h3 className="m-2">{t("service_details")}</h3>
        </div>
        <hr />
        <div className="body d-flex flex-column">
          <div className="title mb-3">
            <h5 className="fw-bold mb-3  ">
              {t("title")}: <span className="fw-normal">{details.title}</span>
            </h5>
          </div>

          <div className="info d-flex gap-2">
            <div className="col-12 col-lg-8">
              <hr className="my-2" />
              <div
                className="d-flex justify-content-between py-2 px-1   "
                style={{ backgroundColor: "#59cca8", color: "#fff" }}
              >
                <span className="fw-bold ">
                  {t("status")}:{" "}
                  <span className="fw-normal ">{details.state}</span>
                </span>
                <span className="fw-bold ">
                  {t("section")}:{" "}
                  <span className="fw-normal ">{details.category}</span>
                </span>
                <span className="fw-bold ">
                  {t("featured")}:{" "}
                  <span className="fw-normal ">
                    {details.isfeatured ? (
                      <span>
                        {t("yes")}{" "}
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                    ) : (
                      <span>
                        {t("no")} <i className="fa-regular fa-circle-xmark"></i>
                      </span>
                    )}
                  </span>
                </span>
                <span className="fw-bold ">
                  {t("evaluation")}:{" "}
                  <span className="fw-normal ">
                    <i className="fa-solid fa-star text-warning ms-2"></i>(
                    {details.rating})
                  </span>
                </span>
              </div>
              <hr className="my-2" />
              <h6 className="fw-bold mb-3">
                {t("description")}:
                <span className="fw-normal p-2 lh-lg">
                  {details.description}{" "}
                </span>
              </h6>
              <hr />
              <img
                style={{
                  width: "90%",
                  objectFit: "cover ",
                  borderRadius: "5px",
                  margin: "5px",
                  maxHeight: "400px",
                }}
                src={previewimg}
                alt=" service main "
              />

              <img
                style={{
                  width: "20%",
                  objectFit: "cover ",
                  borderRadius: "5px",
                  margin: "5px",
                }}
                onClick={() => {
                  setpreviewimg(details.mainImg);
                }}
                src={details.mainImg}
                alt=" service main "
              />

              {imgs.map((item, index) => {
                return (
                  <img
                    onClick={() => {
                      setpreviewimg(item);
                    }}
                    style={{
                      width: "20%",
                      objectFit: "cover ",
                      borderRadius: "5px",
                      margin: "5px",
                    }}
                    key={index}
                    src={item}
                    alt=" service images"
                  />
                );
              })}
              <h6 className="fw-bold my-3 ">
                {t("Buyer_Instructions")}{" "}
                <span className="fw-normal p-2 lh-lg">
                  {" "}
                  {details.buyerinstructions}{" "}
                </span>
              </h6>
              {addons.map((item, index) => {
                return (
                  <>
                    <div className="d-flex justify-content-between" key={index}>
                      <span className="fs-5">
                        {t("add")} {index + 1}:
                        <span className="fs-5 px-2 text-sucess">
                          {item.addonTitle}
                        </span>
                      </span>
                      <span className="fs-5">
                        {t("delivery_time")} :
                        <span className="fs-5 px-2 text-sucess">
                          {item.addonDeliveryDuration} {t("day")}
                        </span>
                      </span>
                      <span className="fs-5">
                        {" "}
                        {t("delivery_time")} {t("price")}:{" "}
                        <span className="fs-5 px-2 text-sucess">
                          {item.addonPrice} $
                        </span>{" "}
                      </span>
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
            <div className="col-12 col-lg-4 ">
              <Serviceuserinfo
                userImg={user.imgUrl}
                userName={user.fullname}
                email={user.email}
              />
              <div className="control-service p-3">
                <div className="control-header d-flex align-items-center">
                  <i className="fa-solid fa-sliders ms-2"></i>
                  <h5>{t("service_control")}</h5>
                </div>
                <hr />
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6>{t("status")}: </h6>
                    <select
                      name=""
                      style={{ width: "70%" }}
                      onChange={(e) => {
                        setnewstate(e.target.value);
                      }}
                      id=""
                    >
                      <option defaultValue disabled selected value="">
                        {t("status")}
                      </option>
                      <option value="approved">approved</option>
                      <option value="deleted">deleted</option>
                      <option value="pending">pending</option>
                    </select>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6> {t("section")}: </h6>

                    <select
                      name=""
                      style={{ width: "70%" }}
                      onChange={(e) => {
                        setnewcategory(e.target.value);
                      }}
                      id=""
                    >
                      <option selected disabled value="">
                        {t("section")}
                      </option>
                      {categories.map((item, index) => {
                        return (
                          <option key={index} value={item.categoryName}>
                            {item.categoryName}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onChange={(e) => {
                          setfeatured(e.target.checked);
                          console.log(featured);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {t("featured")} :
                      </label>
                    </div>
                  </div>
                  <hr />
                  <button
                    className="btn btn-success mb-3"
                    onClick={updateservice}
                    disabled={
                      newcategory !== "" || newstate !== "" || featured != null
                        ? false
                        : true
                    }
                  >
                    {t("updata")}
                  </button>
                  <button className="btn btn-danger" onClick={togglemodal}>
                    {t("delete")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Viewservice;
