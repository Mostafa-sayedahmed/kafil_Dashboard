import React from 'react'
import { useState , useEffect } from 'react';
import { db , auth } from '../../../Firebase/Firebase';

import {useParams } from 'react-router-dom';

export default function ContestDetails() {

  
    let { id } = useParams();
    const [contest, setContest] = useState({});

    const fetchContest = async () => {

      const secdata = await db.collection('contestSections').get();
      const sectionsArr = secdata.docs.map( (doc) => ({ id: doc.id, ...doc.data()}))

      await db.collection('contests').doc(id).get().then((res) =>{
       let element = sectionsArr.find((ele)=> ele.id === res.data().sectionId) ;
        setContest({...res.data(), sectionName : element.name })
      })

    };

    console.log(contest)

    useEffect(() => {
      fetchContest();
    },[]);
        
   
  return (
    <>

    </>    
  )
}
