import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Servicerow from "../../components/servicerow/servicerow";
import Smpilcard from "../../components/smpilcard/smpilcard";
import "../serves/serves.css";
import { db } from "../../Firebase/Firebase";
import {
  collection,
  getDocs,
  getDoc,
  Firestore,
  doc,
} from "firebase/firestore";
import preloader from "../../assets/preloader2.gif";
import { Doughnutchart } from "../../components/doughnutchart/doughnutchart";
import { Areachart } from "../../components/areachart/areachart";

function Serves() {
  const [services, setservices] = useState([]);
  const [sApproved, setsApproved] = useState(0);
  const [sDeleted, setsDeleted] = useState(0);
  const [sPending, setsPending] = useState(0);
  useEffect(() => {
    getservices();
  }, []);
  async function getservices() {
    await getDocs(collection(db, "services")).then(async (querySnapshot) => {
      let app = 0;
      let del = 0;
      let pen = 0;
      var newData = [];

      querySnapshot.forEach(async (res) => {
        switch (res.data().state) {
          case "approved":
            app++;
            break;
          case "pending":
            pen++;
            break;
          case "deleted":
            del++;
            break;
          default:
            console.log("nostate");
            break;
        }
        let userid = res.data().userid;
        const docRef = doc(db, "users", userid);
        await getDoc(docRef).then((result) => {
          newData = [
            ...newData,
            {
              ...res.data(),
              id: res.id,
              username: result.data().fullname,
              userphoto: result.data().imgUrl,
              useremail: result.data().email,
            },
          ];
        });
        setservices(newData);
      });
      setsApproved(app);
      setsDeleted(del);
      setsPending(pen);
    });
  }
  function showsevices() {
    console.log("services");
    console.log(services);
  }

  return (
    <div className=" ">
      <div className="bg-white border border-secondary-subtle  rounded ">
        <h1 className="m-2">الخدمات</h1>
      </div>

      <div className="B-serves p-3 ">
        <div
          className="d-flex justify-content-evenly flex-nowrap"
          style={{ height: "270px", width: "100%" }}
        >
          <div className="d-none d-lg-block d-flex flex-grow-1">
            <Areachart
              title="تفاصيل الخدمات"
              labels={["مرفوض", "بإنتظار المراجعه", "نشط"]}
              Values={[sDeleted, sPending, sApproved]}
            />
          </div>
          <div className=" d-flex flex-grow-1 align-items-center justify-content-center">
            <Doughnutchart
              colors={[
                "rgba(255, 20, 20, 0.3)",

                "rgba(255, 206, 86, 0.3)",

                "rgba(100, 226, 86, 0.3)",
              ]}
              labels={["مرفوض", "بإنتظار المراجعه", "نشط"]}
              Values={[sDeleted, sPending, sApproved]}
            />
          </div>
        </div>
        <div
          className="d-flex justify-content-evenly gap-3 flex-wrap"
          style={{ width: "100%" }}
        >
          <Smpilcard cardName="إجمالى الخدمات" cardValue={services.length} />
          <Smpilcard cardName="بانتظار موافقة الادارة" cardValue={sPending} />
          {/* <Smpilcard cardName="يحتاج الى تعديلات" cardValue="0" /> */}
          <Smpilcard cardName="نشط" cardValue={sApproved} />
          {/* <Smpilcard cardName=" متوقف مؤقتا" cardValue="0" /> */}
          <Smpilcard cardName="مرفوض" cardValue={sDeleted} />
        </div>
      </div>
      <div className="services-container bg-white border border-secondary-subtle mt-3 rounded">
        <h1 className="m-2">الخدمات</h1>
        {/* <Container > */}
        {services.length == 0 ? (
          <img src={preloader} alt="" />
        ) : (
          <table className="table table-hover bg-white services-table">
            <thead>
              <tr>
                <th>#</th>
                <th style={{ Width: "100px", overflow: "hidden" }}>
                  اسم الخدمة
                </th>
                <th>المستخدم</th>
                <th>الحالة</th>
                {/* <th>الإيميل</th> */}
                <th>السعر</th>
                {/* <th>تحكم في الخدمة</th> */}
              </tr>
            </thead>
            <tbody>
              {services.map((item, index) => {
                return (
                  <Servicerow
                    tooltip="view"
                    title="مراجعه "
                    key={index}
                    hash={index + 1}
                    NameProject={item.title}
                    NamePerson={item.username}
                    State={item.state}
                    serviceid={item.id}
                    email={item.useremail}
                    userimg={item.userphoto}
                    budget={item.price + "$"}
                  />
                );
              })}
            </tbody>
          </table>
        )}
        {/* </Container> */}
      </div>
    </div>
  );
}
export default Serves;
