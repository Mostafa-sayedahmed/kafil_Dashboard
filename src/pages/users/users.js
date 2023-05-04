import React from "react";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import { db } from "../../Firebase/Firebase";

import "./users.css";
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const Users = () => {

  const { t } = useTranslation();

  const[user,setUser]=useState([]);



  const fetchUsers = async () => {

    const usersData=[];
     await db.collection("users").onSnapshot((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
      usersData.push({id: doc.id,...doc.data()})
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
        deleteUser(id);
      }
    })
  }


  const deleteUser = (id) => {
    let userId = id;
    console.log(userId)
    db.collection("users").doc(userId).delete();
    afterDelete();
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
          <th>{t("delete")}</th>
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
            <td className='text-nowrap p-2'> <Link type='button' onClick={() =>{
                DeleteAlert(user.id);
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

export default Users;


