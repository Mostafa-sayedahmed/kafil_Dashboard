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

const Users = () => {
  
  const [freelancer, setFreelancer] = useState([]);
  const[user,setUser]=useState([]);
  useEffect(() => {
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
    return()=>subscriber()
    subscriberUser()
   
  }, [])
 

  return (  <>
  
   <h3 className="my-5">أولاً : المستقلون :</h3>
   <Table striped>
      <thead>
        <tr>
          <th>الصورة</th>
          <th> الاسم</th>
          <th> الوظيفة</th>
          <th>المشاهدات</th>
          <th>الاعجابات</th>
          <th>الاعمال</th>
          <th>التقييم</th>
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


    <h3 className="my-5">ثانياً : المستخدمون :</h3>
    <Table striped>
      <thead>
        <tr>
          <th>الصورة</th>
          <th> الاسم</th>
          <th> الايميل</th>
        </tr>
      </thead>
      <tbody>
      {user.map((user)=>{
        if(!user.imgUrl){
          user.imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
        }
        return<>
           <tr>
           <td><img src={user.imgUrl} width={"100px"} height={"100px"} style={{borderRadius:"30%"}}></img></td>
           <td>{user.fullname}</td>
           <td>{user.email}</td>
         </tr>
         </>
        })}
       
      </tbody>
    </Table>
   

   
    </>);
};

export default Users;
