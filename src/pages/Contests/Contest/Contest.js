import React from 'react'
import Smpilcard from '../../../components/smpilcard/smpilcard';

import {Link} from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { db , auth } from '../../../Firebase/Firebase';
import ReactLoading from "react-loading";


export default function Contest() {

  
    // contest
    const [contest, setContest] = useState([]);
    const [isBusy, setIsBusy] = useState(false);

    const [completedNum, setCompletedNum] = useState(0);
    const [notCompletedNum, setNotCompletedNum] = useState(0);

    const [acceptedNum, setAcceptedNum] = useState(0);
    const [notAcceptedNum, setNotAcceptedNum] = useState(0);


      function afterDelete(){
        Swal.fire({
            title: 'تم الحذف بنجاح',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        });
      } 
  
           
        function DeleteAlert(id){
            Swal.fire({
                title: 'هل انت متأكد؟',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#1dbf73',
                cancelButtonColor: '#d33',
                confirmButtonText: 'حذف',
                cancelButtonText:'الغاء'
            }).then((result) => {
            if (result.isConfirmed) {
              deleteContest(id)
            }
        })
    } 
      
    const fetchContests = async () => {

      const secdata = await db.collection('contestSections').get();
      const sectionsArr = secdata.docs.map( (doc) => ({ id: doc.id, ...doc.data()}))

      const data = await db.collection('contests').get();
      let arr = [];

      data.docs.map( (doc) =>{
        let element = "";
        element = sectionsArr.find((ele)=> ele.id === doc.data().sectionId) ;
        arr.push({ id: doc.id, ...doc.data() , sectionName : element.name });
      });

      setContest([...arr]) ;
      getCompleted(arr);
      getNotCompleted(arr);
      getAccepted(arr);
      getNotAccepted(arr);
      setIsBusy(true);

    };

    const updateCompleted = (id , value) => {
      let contestId = id;
      db.collection('contests').doc(contestId).update({
        completed : value
      });
      fetchContests();
    };

    const updateAccepted = (id , value) => {
      let contestId = id;
      db.collection('contests').doc(contestId).update({
        accepted : value
      });
      fetchContests();
    };

    const deleteContest = (id) => {
      let contestId = id;
      db.collection('contests').doc(contestId).delete();
        afterDelete();
        fetchContests();
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
     }


     const getAccepted = (data) => {
      let arr = data.filter((ele)=>{
         return ele.accepted == true;
       });
       setAcceptedNum(arr.length);
     }
 
     const getNotAccepted = (data) => {
       let arr = data.filter((ele)=>{
          return ele.accepted == false;
        })
        setNotAcceptedNum(arr.length);

      }


    useEffect(() => {
      fetchContests();
    },[]);
        
   
  return (
        <>
        {/* start heading */}
        <div className="bg-white border rounded my-2 ">
          <h3 className="m-2 "> <i className="fa-solid fa-table-list ms-3" style={{color: "#28a745"}}></i>مسابقاتي </h3>
          <p  style={{border:'2px solid #28a745',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
        </div>
        {/* end heading */}

        {/* start cards */}
        <div className="B-serves p-3 ">
            <Smpilcard cardName=" مكتمل " cardValue={completedNum} />
            <Smpilcard cardName="غير مكتمل" cardValue={notCompletedNum} />
            <Smpilcard cardName="مقبولة" cardValue={acceptedNum} />
            <Smpilcard cardName="غير مقبولة" cardValue={notAcceptedNum} />
         </div>
      {/* end cards */}
      {/* start heading  two*/}
      <div className="bg-white border border-secondary-subtle my-3 rounded">
        <h3 className="m-2" > <i className="fa-solid fa-table-list ms-3" style={{color: "#28a745"}}></i> مسابقاتي </h3>
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
      <th >مقبولة</th>
      <th >حذف</th>
    </tr>
  </thead>
    <tbody>
          {isBusy ? (
                contest.map((cont,index)=>{
                  return(
                    // <CardofContext key={index} index={index+1} name={cont.userName} contest={cont.title}  section={cont.sectionName} award={cont.firstWinner} checked={cont.completed} />
                  
                    <tr key={index}>
                    <th scope="row " className='ms-2'>{index+1}</th>
                    <td className='text-nowrap p-2'><i className="fa-solid fa-user ms-2" style={{color: "#9ca1ab"}} ></i> {cont.userName}</td>
                    <td className='text-nowrap p-2'>
                      <i className="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i>
                      <Link to={`/Contest/${cont.id}`}>{cont.title}</Link>
                    </td>
                    <td className='text-nowrap p-2'><i className="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i> {cont.sectionName} </td>
                    <td className='text-nowrap p-2'><i className="fa-solid fa-money-bill-1-wave ms-2" style={{color:" #9ca1ab"}}></i>{cont.firstWinner}</td>
                    <td><input className="form-check-input" type="checkbox"
                    onChange={(e)=>{
                      updateCompleted(cont.id , e.target.checked);
                    }}
                    checked={cont.completed}/></td>

                    <td><input className="form-check-input" type="checkbox"
                    onChange={(e)=>{
                      updateAccepted(cont.id , e.target.checked);
                    }}
                    checked={cont.accepted}/></td>

                    <td className='text-nowrap p-2'> <Link type='button' onClick={() =>{
                        DeleteAlert(cont.id);
                    }}>
                      <i className="fa-solid fa-trash text-danger fs-6"></i>
                    </Link></td>
                    
                  </tr>

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
