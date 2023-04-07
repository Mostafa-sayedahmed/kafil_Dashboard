import React from 'react'
import Smpilcard from '../../components/smpilcard/smpilcard';
import CardofContext from '../../components/CardofContext/CardofContext';

import { useState , useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { db , auth } from '../../Firebase/Firebase';
import ReactLoading from "react-loading";


export default function Context() {

  
    // contest
    const [contest, setContest] = useState([]);
    const [sections, setSections] = useState([]);
    const [isBusy, setIsBusy] = useState(false);
    const [completedNum, setCompletedNum] = useState(0);
    const [notCompletedNum, setNotCompletedNum] = useState(0);



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

                console.log(response)
                    
            } catch (error) {
                console.log(error)
                message = error.message;
                icon = "error" ;
                afterDelete(message , icon);
            }
      
        }     

    const fetchContests = async () => {
      const data = await db.collection('contests').get();
      setContest(data.docs.map( (doc) => ({ id: doc.id, ...doc.data() , sectionName : sections.find((ele)=> ele.id === doc.data().sectionId).name }) ));
      setIsBusy(true);
      
      
    };

    const fetchSections = async () => {
      const data = await db.collection('contestSections').get();
      setSections(data.docs.map( (doc) => ({ id: doc.id, ...doc.data()})));
    };

    const getCompleted = (data) => {
     let arr = data.filter((ele)=>{
        return ele.completed == true;
      });
      setCompletedNum(arr.length);
      console.log(arr);
    }


    const getNotCompleted = (data) => {
      let arr = data.filter((ele)=>{
         return ele.completed == false;
       })
       setNotCompletedNum(arr.length);
       console.log(arr);
     }


    useEffect(() => {


      fetchSections().then(() => {
      fetchContests();
      });

  
      getCompleted(contest);
      getNotCompleted(contest);
    
      
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
            <Smpilcard cardName=" مكتمل " cardValue={completedNum} />
            <Smpilcard cardName="غير مكتمل" cardValue={notCompletedNum} />
            <Smpilcard cardName="مرفوض" cardValue="0" />
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
      <th >حذف</th>
    </tr>
  </thead>
    <tbody>
          {isBusy ? (
                contest.map((cont,index)=>{
                  return(
                    <CardofContext key={index} index={index+1} name={cont.userName} contest={cont.title}  section={cont.sectionName} award={cont.firstWinner} DeleteAlert={DeleteAlert(cont.id)}/>
                  )
               })
              ) : (<div className='d-flex justify-content-center align-items-center w-100' style={{ height: "100%" , width:"100%" }}>
              <div>
                <ReactLoading type="spin" color="#1dbf73"
                  height={100} width={50} />
              </div>

            </div>)

            }
   </tbody>
     </table>
  </>    
  )
}
