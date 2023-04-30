import React from "react";
import Table from 'react-bootstrap/Table';
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore/lite';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import { db } from "../../Firebase/Firebase";
import './users.css'
import "./users.css";

import Language from "../../components/Language/Language";

import { useTranslation } from "react-i18next";

const Users = () => {

  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  
  const [freelancer, setFreelancer] = useState([]);

  const[user,setUser]=useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getDataFreelancers=[];
    const usersData=[];
    const subscriber=db.collection("Freelancers").onSnapshot((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        getDataFreelancers.push({...doc.data()})
      })
      setFreelancer(getDataFreelancers)
    })
    const subscriberUser=db.collection("users").onSnapshot((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
      usersData.push({...doc.data()})
      })
      setUser(usersData)
    })
    setIsLoading(false);
    return()=>subscriber()
    subscriberUser()
    
  }, [])



  const updateAdmin= (id , value) => {
    let userId = id;
    db.collection("users").doc(userId).update({
      isAdmin : value
    });
  };

 

  return (  <>

  <Language />
  
   <h3 className="my-5"> {t("first")} : {t("freelancer")} :</h3>
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


    <h3 className="my-5"> {t("second")} : {t("users")} :</h3>
    <Table striped>
      <thead>
        <tr>
          <th>{t("photo")}</th>
          <th>{t("name")} </th>
          <th>{t("email")} </th>
          <th>{t("admin")} </th>
        </tr>
      </thead>
      <tbody>
      {user.map((user)=>{
        if(!user.imgUrl){
          user.imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
        }
        if(user.isAdmin){
          user.isAdmin="Admin"
        }
        return<>
           <tr>
           <td><img src={user.imgUrl} width={"100px"} height={"100px"} style={{borderRadius:"30%"}}></img></td>
           <td>{user.fullname}</td>
           <td>{user.email}</td>
           {/* <td>{user.isAdmin}</td> */}

           <td><input className="form-check-input" type="checkbox"
              onChange={(e)=>{
                updateAdmin(user.id , e.target.checked)
            }}
            checked={user.isAdmin}/></td>
         </tr>
         </>
        })}
       
      </tbody>
    </Table>
   

   
    </>);
};

export default Users;


