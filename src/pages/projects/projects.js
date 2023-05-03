import React,{useState,useEffect} from 'react'
import Smpilcard from '../../components/smpilcard/smpilcard'
import {auth, db }from '../../Firebase/Firebase';
import { collection ,deleteDoc,doc,getDocs} from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Language from "../../components/Language/Language";
import { useTranslation } from "react-i18next";
import preloader from "../../assets/preloader2.gif";

import Swal from "sweetalert2";

export default function Projects() {

  const { t } = useTranslation();

   const [project,setprojects] = useState([])
   const [loading, setLoading] = useState(false);
   const [show, setShow] = useState(false);


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

 
    
    const handleClose = () => setShow(false);
    const handleShow = () =>{
      // console.log(id);
      setShow(true);
    } 
      

    function DeleteAlert(id){
      Swal.fire({
          title: t("are_you_sure"),
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#1dbf73',
          cancelButtonColor: '#d33',
          confirmButtonText: t("delete"),
          cancelButtonText:t("cancel"),
      }).then((result) => {
      if (result.isConfirmed) {
        DaleteProject(id)
      }
  })
} 


function afterDelete(){
  Swal.fire({
      title: t("Deleted_successfully"),
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
  });
} 




        ///// Handling Delete Project
        
   const DaleteProject = async (id) => {    
  //  async  function DaleteProject(id){
      // console.log(id);
        try {
          // await deleteDoc(doc(db, "projects", params.serviceid));
              await deleteDoc(doc(db,'projects',id))
              fetchproject();
              afterDelete();
              // console.log("Done");   
        } catch (error) {console.log(error);}
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


  <div className="bg-white border rounded my-2 ">
      <h3 className="m-2 "> <i class="fa-solid fa-table-list ms-3" style={{color: "#9ca1ab"}}></i>{t("my_projects")}</h3>
      <p  style={{border:'2px solid green',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
  </div>


    <div className="B-serves p-3 ">


      <Smpilcard cardName={t( "total_services")} cardValue={project.length}/>
      <Smpilcard cardName={t("not_accepted")} cardValue={NotAccepted} />
      <Smpilcard cardName={t("completed")} cardValue={IsComplete} />
      <Smpilcard cardName={t("not_completed")} cardValue={IsNotComplete} />

     
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
          <th scope="row " className='ms-2'>{index+1}</th>
          <td className='text-nowrap p-2'><i class="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i> {proj.title} </td>
          <td className='text-nowrap p-2'><i class="fa-solid fa-user ms-2" style={{color: "#9ca1ab"}} ></i> {proj.personName}</td>
          <td className='text-nowrap p-2'><i class="fa-regular fa-clock ms-2" style={{color: "#9ca1ab"}}></i> منذو   {proj.Time} ساعات </td>
          <td className='text-nowrap p-2'><i class="fa-solid fa-money-bill-1-wave ms-2" style={{color:" #9ca1ab"}}></i>{proj.budget}</td>
          {/* <td><button className='btn btn-outline-danger p-2 rounded' onClick={()=>{handleShow()}}> {t("delete")}</button></td> */}
          <td><button className='btn btn-outline-danger p-2 rounded' onClick={()=>{
              DeleteAlert(proj.id);
          }}> {t("delete")}</button></td>
          <td>    
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title className="text-center fw-bold"> {t("warning")}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center fw-bold"> {t("Are_Delete_Project")}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("cancel")}
          </Button>
          <Button variant="danger" onClick={()=>{
            DeleteAlert(proj.id)
          }}>
            {t("delete")}
          </Button>
        </Modal.Footer>
      </Modal> */}

      </td>
        </tr>

        
      )   
      }) : <img src={preloader} alt="Loading" /> }

   </tbody>
   </table> 

  
  </>

)

}
