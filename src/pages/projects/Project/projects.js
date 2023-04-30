import React,{useState,useEffect} from 'react'
import Smpilcard from '../../../components/smpilcard/smpilcard'
import {auth, db }from '../../../Firebase/Firebase';
import { collection ,deleteDoc,doc,getDocs} from 'firebase/firestore';


import Language from "../../../components/Language/Language";

import { useTranslation } from "react-i18next";

import preloader from "../../../assets/preloader2.gif";


export default function Projects() {


  const { t } = useTranslation();

   const [project,setprojects] = useState([])
   const [loading, setLoading] = useState(false);

   const fetchproject = async () => {      
      try {
        await getDocs(collection(db, "projects")).then((res)=>{
          console.log(res);
          const GetData = res.docs.map(doc => ({...doc.data(),id:doc.id}))
          setprojects(GetData);
         })
         setLoading(true);
      } catch (error) {
        
      }

}
      
    useEffect(()=>{
      fetchproject();
    }, [])


        ///// Handling Delete Project
   async  function DaleteProject(id){
      console.log(id);
        try {
            // if(alert('Are You Sure to delette This Project ?')){
              await deleteDoc(doc(db,'projects',id))
              fetchproject()
              console.log("Done");
            // }
        } catch (error) {
            console.log(error);
        }
            

      }


          /////////  Handling My Projects ///////
      let IsComplete = 0;
      let IsNotComplete = 0;
      let IsAccepted = 0;
      let IsApproved = 0;
      let NotAccepted = 0;

      for (let i=0 ;i<project.length;i++){
        if(project[i].completed==true){
          IsComplete++;
        }else{
          IsNotComplete++;
        }

        if(project[i].accepted==true){
          IsAccepted++;
        }else{
          NotAccepted++;
        }
        
      }

  return (
   
    <>  

  <Language />
   

  <div className="bg-white border rounded my-2 ">
      <h3 className="m-2 "> <i class="fa-solid fa-table-list ms-3" style={{color: "#9ca1ab"}}></i>{t("my_projects")}</h3>
      <p  style={{border:'2px solid green',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
  </div>


    <div className="B-serves p-3 ">


      <Smpilcard cardName=" اجمالي الخدمات " cardValue={project.length}/>
      {/* <Smpilcard cardName="يحتاج الى تعديلات" cardValue="0" /> */}
      {/* <Smpilcard cardName="منشور" cardValue={IsApproved} /> */}
      <Smpilcard cardName="مرفوض" cardValue={NotAccepted} />
      {/* <Smpilcard cardName="مرحله تلقي العروض " cardValue="0" /> */}
      <Smpilcard cardName=" مكتمل " cardValue={IsComplete} />
      <Smpilcard cardName=" غير مكتمل " cardValue={IsNotComplete} />

     
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
    
        {loading ? project.map((proj,index) => { 
      return(

        <tr key={index}>
          <th scope="row " className='ms-2'>{proj.index}</th>
          <td className='text-nowrap p-2'><i class="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i> {proj.title} </td>
          <td className='text-nowrap p-2'><i class="fa-solid fa-user ms-2" style={{color: "#9ca1ab"}} ></i> {proj.personName}</td>
          <td className='text-nowrap p-2'><i class="fa-regular fa-clock ms-2" style={{color: "#9ca1ab"}}></i> منذو   {proj.Time} ساعات </td>
          <td className='text-nowrap p-2'><i class="fa-solid fa-money-bill-1-wave ms-2" style={{color:" #9ca1ab"}}></i>{proj.budget}</td>
          <td><button className='btn btn-outline-danger p-2 rounded' onClick={()=>{DaleteProject(proj.id)}}>Delete</button></td>
        </tr>

      )   
      }) : <img src={preloader} alt="Loading" /> }

   </tbody>
   </table> 
  
  </>

)

}
