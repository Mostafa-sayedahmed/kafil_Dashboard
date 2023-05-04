import React from "react";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import { db } from "../../Firebase/Firebase";
import "./Freelancers.css";
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const Freelancers = () => {

  const { t } = useTranslation();

  const [freelancer, setFreelancer] = useState([]);


  const fetchFreelancers = async () => {

    const getDataFreelancers = [];

    await db.collection("Freelancers").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getDataFreelancers.push({ id : doc.id , ...doc.data() })
      })
      setFreelancer(getDataFreelancers)
    })

  };

  function afterDelete() {
    Swal.fire({
      title: t("Deleted_successfully"),
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });
  }


  function DeleteAlert(id) {
    Swal.fire({
      title: t("are_you_sure"),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1dbf73',
      cancelButtonColor: '#d33',
      confirmButtonText: t("delete"),
      cancelButtonText: t("cancel"),
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFreelancer(id)
      }
    })
  }


  const deleteFreelancer = (id) => {
    let FreelancerId = id;
    console.log(FreelancerId)
    db.collection("Freelancers").doc(FreelancerId).delete();
    afterDelete();
    fetchFreelancers();
  };

  useEffect(() => {
    // const getDataFreelancers=[];

    // const subscriber=db.collection("Freelancers").onSnapshot((querySnapshot)=>{
    //   querySnapshot.forEach((doc)=>{
    //     getDataFreelancers.push({...doc.data()})
    //   })
    //   setFreelancer(getDataFreelancers)
    // })

    fetchFreelancers();
    // const subscriberUser=db.collection("users").onSnapshot((querySnapshot)=>{
    //   querySnapshot.forEach((doc)=>{
    //   usersData.push({...doc.data()})
    //   })
    //   setUser(usersData)
    // })
    // setIsLoading(false);
    // return()=>subscriber()
    // subscriberUser()

  }, [])



  return (<>
    <h3 className="my-5"> {t("freelancer")} :</h3>
    <Table striped>
      <thead>
        <tr>
          <th>{t("photo")}</th>
          <th>{t("name")} </th>
          <th>{t("job")} </th>
          <th>{t("views")} </th>
          <th>{t("likes")} </th>
          <th>{t("works")} </th>
          <th>{t("evaluation")} </th>
          <th>{t("delete")}</th>
        </tr>
      </thead>
      <tbody>
        {freelancer.map((freelancer) => {
          return <>
            <tr>
              <td>
                <img src={freelancer.img} width={"100px"} height={"100px"} style={{ borderRadius: "30%" }}></img>
              </td>
              <td>{freelancer.name}</td>
              <td>{freelancer.title}</td>
              <td>{freelancer.views}</td>
              <td>{freelancer.likes}</td>
              <td>{freelancer.portfolio}</td>
              <td>{freelancer.rating}</td>
              <td className='text-nowrap p-2'> <Link type='button' onClick={() => {
                DeleteAlert(freelancer.id);
              }}>
                <i className="fa-solid fa-trash text-danger fs-6"></i>
              </Link></td>
            </tr>
          </>
        })}

      </tbody>
    </Table>

  </>);
};

export default Freelancers;


