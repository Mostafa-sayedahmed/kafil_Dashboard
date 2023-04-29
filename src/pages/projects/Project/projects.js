import React,{useState,useEffect} from 'react'
import Smpilcard from '../../../components/smpilcard/smpilcard'
import Cardpoject from '../../../components/CardProject/Cardpoject'
import {auth, db }from '../../../Firebase/Firebase';
import { collection ,deleteDoc,doc,getDocs} from 'firebase/firestore';

import { useTranslation } from "react-i18next";

export default function Projects() {


  const { t } = useTranslation();

   const [project,setprojects] = useState([])

   const fetchproject = async () => {       
    await getDocs(collection(db, "projects"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
              setprojects(newData);                
            console.log( newData);
        })
}

    useEffect(()=>{
      fetchproject();
    }, [])




    // delete project
   async  function DaleteProject(id){
        //  console.log(id);
     const check = alert("are you sure to Delete this Project")
          if(check){
           await deleteDoc(doc(db, "projects", id));
            fetchproject();
          }    
      }

  return (
   
    <>  
   
  <div className="bg-white border rounded my-2 ">
      <h3 className="m-2 "> <i class="fa-solid fa-table-list ms-3" style={{color: "#9ca1ab"}}></i>{t("my_projects")}</h3>
      <p  style={{border:'2px solid green',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
  </div>


    <div className="B-serves p-3 ">
      <Smpilcard cardName={t("pending_approval")} cardValue="0" />
      <Smpilcard cardName={t("needs_modifications")} cardValue="0" />
      <Smpilcard cardName={t("accepted")} cardValue="0" />
      <Smpilcard cardName={t("completed")} cardValue="0" />


      <Smpilcard cardName="مرحله تلقي العروض " cardValue="0" />
      <Smpilcard cardName="منشور" cardValue="0" />
     
    </div>
   
    <div className="bg-white border border-secondary-subtle my-3 rounded">
      <h3 className="m-2" > <i class="fa-solid fa-table-list ms-3" style={{color: "#9ca1ab"}}></i>{t("projects")}</h3>
      <p  style={{border:'2px solid green',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
    </div>
    
  <table className="table table-hover bg-white">
  <thead>
  <tr>
    <th >#</th>
    <th >{t("project")}</th>
    <th >{t("project_owner")}</th>
    <th >{t("time")}</th>
    <th >{t("budget")}</th>
    <th >{t("delete")}</th>
  </tr>
</thead>
  <tbody>
   { project.map((proj,index) => { 
      return(
      <tr key={index}>
        <th scope="row " className='ms-2'>{proj.index}</th>
        <td className='text-nowrap p-2'><i class="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i> {proj.title} </td>
        <td className='text-nowrap p-2'><i class="fa-solid fa-user ms-2" style={{color: "#9ca1ab"}} ></i> {proj.personName}</td>
        <td className='text-nowrap p-2'><i class="fa-regular fa-clock ms-2" style={{color: "#9ca1ab"}}></i> منذو   {proj.Time} ساعات </td>
        <td className='text-nowrap p-2'><i class="fa-solid fa-money-bill-1-wave ms-2" style={{color:" #9ca1ab"}}></i>{proj.budget}</td>
        <td><button className='btn btn-outline-danger p-2 rounded' onClick={()=>{DaleteProject(proj.id)}}>{t("delete")}</button></td>
       </tr>
      )   
  })}

   </tbody>
   </table> 
  
  </>

)

}
