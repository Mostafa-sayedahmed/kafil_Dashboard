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
 
console.log(user);

  return (  <>
    {<ul>
    {freelancer.map((movie)=>{
       return<>
       <Card   style={{ width: '18rem' }} className="d-inline-block m-2">
       <Card.Img variant="top" src={movie.img}  />
       <Card.Body>
       <Card.Title>اسم المستقل  : {movie.name}</Card.Title>
         <Card.Text>
           الوظيفة :{movie.title}
         </Card.Text>
         <Card.Text>
           الاعجاب :{movie.likes}
         </Card.Text>
         <Card.Text>
           الاعمال :{movie.portfolio}
         </Card.Text>
         <Card.Text>
           التقييم :{movie.rating}
         </Card.Text>
         <Card.Text>
           المشاهدات :{movie.views}
         </Card.Text>
       </Card.Body>
     </Card>
     </>
    })}
    
   </ul>}
   {<ul>
    {user.map((movie)=>{
       return<>
       <Card   style={{ width: '18rem' }} className="d-inline-block m-2">
       <Card.Img variant="top" src={movie.imgUrl}   />
       <Card.Body>
       <Card.Title>اسم المستخدم  : {movie.fullname}</Card.Title>
         <Card.Text>
           الايميل :{movie.email}
         </Card.Text>
       </Card.Body>
     </Card>
     </>
    })}
    
   </ul>}
 
   
   
    </>);
};

export default Users;
