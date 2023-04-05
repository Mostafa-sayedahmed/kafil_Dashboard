import React from 'react'
import Smpilcard from '../../components/smpilcard/smpilcard';
import CardofContext from '../../components/CardofContext/CardofContext';

import { useState , useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { db , auth } from '../../Firebase/Firebase';

export default function Context() {

  
    // contest
    const [contest, setContest] = useState([]);
    const [contestId, setContestId] = useState();
      

      function afterDelete(message , icon){
        Swal.fire({
            title: message,
            icon: icon,
            showConfirmButton: false,
            timer: 1500
        });
    } 
  
           
        function DeleteAlert(id){
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
            }).then((result) => {
            if (result.isConfirmed) {
                // deleteData(id);
            }
        })
    } 
      
        async function deleteData(id) {
            let message;
            let icon;
            try {
                const response = await axios.post("");
         
                let index = contest.findIndex( ele => ele.id === id);
                setContest(contest.splice(index,1));
          
                // fetchData();
                console.log(response)
                    
            } catch (error) {
                console.log(error)
                message = error.message;
                icon = "error" ;
                afterDelete(message , icon);
            }
      
        }     


    const handleSubmit = async () => {
        try {
            await auth.signInWithEmailAndPassword("EsraaMokhtar2310@gmail.com", "Esraa#2310");
        } catch (error) {
            console.error(error);
        }
        fetchContests();
      };

    const fetchContests = async () => {
      const data = await db.collection('contests').get();
      setContest(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    console.log(contest)

    useEffect(() => {
      fetchContests();
    },[]);
        
   
  return (
        <>
        {/* start heading */}
        <div className="bg-white border rounded my-2 ">
          <h3 className="m-2 "> <i class="fa-solid fa-table-list ms-3" style={{color: "#28a745"}}></i>مسابقاتي </h3>
          <p  style={{border:'2px solid #28a745',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
        </div>
        {/* end heading */}

        {/* start cards */}
        <div className="B-serves p-3 ">
        <Smpilcard cardName=" بانتظار موافقه الاداره  " cardValue="0" />
        <Smpilcard cardName="يحتاج الى تعديلات" cardValue="0" />
        <Smpilcard cardName="منشور" cardValue="0" />
        <Smpilcard cardName="مرفوض" cardValue="0" />
        <Smpilcard cardName="مرحله تلقي العروض " cardValue="0" />
        <Smpilcard cardName=" مكتمل " cardValue="0" />
         </div>
      {/* end cards */}
      {/* start heading  two*/}
      <div className="bg-white border border-secondary-subtle my-3 rounded">
        <h3 className="m-2" > <i class="fa-solid fa-table-list ms-3" style={{color: "#28a745"}}></i> مسابقاتي </h3>
        <p  style={{border:'2px solid #28a745',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
      </div>
      {/* end heading  two*/}
       {/* starting Table */}
    <table className="table table-hover bg-white">
    <thead>
    <tr>
      <th >#</th>
      <th >الاسم</th>
      <th >المسابقة</th>
      <th >القسم</th>
      <th >الجائزة</th>
      <th >مكتملة</th>
    </tr>
  </thead>
    <tbody>
    {contest.map((cont,index)=>{
      return(
        <CardofContext key={index} index={index} name={cont.userName} contest={cont.title}  section={cont.sectionId} award={cont.firstWinner}/>
      )
  
   })}
   </tbody>
     </table>
      {/* end Table */}

        </>    
  )
}
