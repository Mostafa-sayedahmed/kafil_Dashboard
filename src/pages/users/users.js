import React from "react";
import Table from 'react-bootstrap/Table';
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";



import "./users.css";
const Users = () => {
  //insializing firestore 
  // FireBase config
  const firebaseConfig = {
    apiKey: "AIzaSyByEnviX-FDw6MAqAt3DdFm5GTvXuKiwKE",
    authDomain: "kafiil-12b6c.firebaseapp.com",
    databaseURL: "https://kafiil-12b6c-default-rtdb.firebaseio.com",
    projectId: "kafiil-12b6c",
    storageBucket: "kafiil-12b6c.appspot.com",
    messagingSenderId: "894615157997",
    appId: "1:894615157997:web:9e5b2fc5d3f0c7ceb5a0e4",
    measurementId: "G-TXXLDM8EZ1"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [freelancer, setFreelancer] = useState([]);
  let arr = [];
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, "Freelancers"))
      data.forEach((doc) => {
        freelancer.push( doc.data());
      })
    }
    fetchData()
   
  }, [])
 console.log(freelancer);
 


  return (  <>
    {<ul>
    {freelancer.map((movie)=>{
       return<>
       <Card   style={{ width: '18rem' }} className="d-inline-block m-2">
       <Card.Img variant="top" src={movie.img} />
       <Card.Body>
         <Card.Title>الاسم : {movie.name}</Card.Title>
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
 
   
   
    </>);
};

export default Users;
