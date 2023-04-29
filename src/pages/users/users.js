import React from "react";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import { db } from "../../Firebase/Firebase";

import "./users.css";

import { useTranslation } from "react-i18next";

const Users = () => {

  const { t } = useTranslation();

  const[user,setUser]=useState([]);



  const fetchUsers = async () => {

    const usersData=[];
     await db.collection("users").onSnapshot((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
      usersData.push({...doc.data()})
      })
      setUser(usersData)
    })

  }


  const updateAdmin= (id , value) => {
    let userId = id;
    db.collection("users").doc(userId).update({
      isAdmin : value
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, [])

  return (  <>

    <h3 className="my-5">{t("users")} :</h3>
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

           <td><input className="form-check-input" type="checkbox"
              onChange={(e)=>{
                updateAdmin(user.uid , e.target.checked)
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


