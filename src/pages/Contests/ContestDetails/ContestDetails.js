import React from 'react'
import { useState , useEffect } from 'react';
import { db , auth } from '../../../Firebase/Firebase';

import {useParams } from 'react-router-dom';

export default function ContestDetails() {

  
    let { id } = useParams();
    const [contest, setContest] = useState({});
    const [comments, setComments] = useState([]);

    const fetchContest = async () => {

      const secdata = await db.collection('contestSections').get();
      const sectionsArr = secdata.docs.map( (doc) => ({ id: doc.id, ...doc.data()}));

      const commentsdata = await db.collection('contestsComments').get();
      const commentArr = commentsdata.docs.map( (doc) => ({ id: doc.id, ...doc.data()}));

      await db.collection('contests').doc(id).get().then((res) =>{
       let element = sectionsArr.find((ele)=> ele.id === res.data().sectionId) ;

       let CommentElements = commentArr.filter((ele)=> ele.contestId === res.id) ;

       setComments([...commentArr.filter((ele)=> ele.contestId === res.id)])

        setContest({...res.data(), sectionName : element.name});
      })

    };


    console.log(contest)

    useEffect(() => {
      fetchContest();
    },[]);
        
   
  return (
    <>
    
     <div>
       <div className="bg-white border border-secondary-subtle  rounded p-3">
         <div className="header d-flex justify-content-between">
           <h3 className="m-2">تفاصيل المسابقة</h3>
         </div>
         <hr />
         <div className="body d-flex flex-column">
           <div className="title mb-3">
             <h5 className="fw-bold mb-3  ">
               العنوان: <span className="fw-normal"> 
               {contest.title}
                </span>
             </h5>

             <h6 className="fw-bold mb-3">
                صاحب المسابقة:
                <span className="fw-normal p-2 lh-lg">
                  {contest.userName}
                </span>
              </h6>
           </div>

           <div className="info d-flex gap-2">
             <div className="col-12 col-lg-8">
               <hr className="my-2" />
               <div
                className="d-flex justify-content-between py-2 px-1   "
                style={{ backgroundColor: "#59cca8", color: "#fff" }}
              >
                <span className="fw-bold ">
                  القسم: <span className="fw-normal ">
                  {contest.sectionName}
                    </span>
                </span>
                <span className="fw-bold ">
                 حالة القبول: <span className="fw-normal ">
                  {contest.accepted?("مقبولة"):("غير مقبولة")}
                    </span>
                </span>
                
                <span className="fw-bold ">
                   حالة الاكتمال:{" "}
                  <span className="fw-normal ">
                    {contest.completed?("مكتملة"):("غير مكتملة")}
                  </span>
                </span>
              </div>
              <hr className="my-2" />
              <h6 className="fw-bold mb-3">
                الوصف:
                <span className="fw-normal p-2 lh-lg">

                  {contest.description}
                </span>
              </h6>
              <hr />

              <h6 className="fw-bold my-3 ">
                 التعليقات:{" "}
              </h6>

                { comments.map((comment , index)=>{
                    return(
                      <div ket={index}>
                        <div className='row'>
                            <div className='col-2'>
                                <img className='rounded-circle' src={comment.userImg} alt='' />
                            </div>
                            <div className='col-4 mt-4'>
                              <h4>
                              {comment.userName}
                              </h4>
                            </div>
                        </div>
                        <div className='m-3'>
                          {comment.comment}
                        </div>
                    </div>
                    )
                  })
                }



            </div>
          
          </div>
        </div>
      </div>
    </div>

    </>    
  )
}




