import React from "react";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import { db } from "../../Firebase/Firebase";
import "./Freelancers.css";

import { useTranslation } from "react-i18next";

const Freelancers = () => {

  const { t } = useTranslation();
  
  const [freelancer, setFreelancer] = useState([]);

      
  const fetchFreelancers = async () => {

    const getDataFreelancers=[];

    await db.collection("Freelancers").onSnapshot((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        getDataFreelancers.push({...doc.data()})
      })
      setFreelancer(getDataFreelancers)
    })

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



  return (  <>
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
        </tr>
      </thead>
      <tbody>
      {freelancer.map((freelancer)=>{ 
        return<>
           <tr>
           <td>
            <img src={freelancer.img} width={"100px"} height={"100px"} style={{borderRadius:"30%"}}></img>
            </td>
           <td>{freelancer.name}</td>
           <td>{freelancer.title}</td>
           <td>{freelancer.views}</td>
           <td>{freelancer.likes}</td>
           <td>{freelancer.portfolio}</td>
           <td>{freelancer.rating}</td>
         </tr>
         </>
        })}
       
      </tbody>
    </Table>

    </>);
};

export default Freelancers;


