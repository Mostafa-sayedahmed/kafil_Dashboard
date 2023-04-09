import React,{useState,useEffect} from 'react'
import Smpilcard from '../../../components/smpilcard/smpilcard'
import Cardpoject from '../../../components/CardProject/Cardpoject'
import {auth, db }from '../../../Firebase/Firebase';
import { collection ,deleteDoc,doc,getDocs} from 'firebase/firestore';



export default function Projects() {

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
      <h3 className="m-2 "> <i class="fa-solid fa-table-list ms-3" style={{color: "#9ca1ab"}}></i>مشاريعي </h3>
      <p  style={{border:'2px solid green',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
  </div>


    <div className="B-serves p-3 ">
      <Smpilcard cardName=" بانظار موافقه الاداره  " cardValue="0" />
      <Smpilcard cardName="يحتاج الى تعديلات" cardValue="0" />
      <Smpilcard cardName="منشور" cardValue="0" />
      <Smpilcard cardName="مرفوض" cardValue="0" />
      <Smpilcard cardName="مرحله تلقي العروض " cardValue="0" />
      <Smpilcard cardName=" مكتمل " cardValue="0" />
     
    </div>
   
    <div className="bg-white border border-secondary-subtle my-3 rounded">
      <h3 className="m-2" > <i class="fa-solid fa-table-list ms-3" style={{color: "#9ca1ab"}}></i> المشاريع </h3>
      <p  style={{border:'2px solid green',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
    </div>
    
  <table className="table table-hover bg-white">
  <thead>
  <tr>
    <th >#</th>
    <th >NameProject</th>
    <th >NamePerson</th>
    <th >Time</th>
    <th >budget</th>
    <th >Delete</th>
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
        <td><button className='btn btn-outline-danger p-2 rounded' onClick={()=>{DaleteProject(proj.id)}}>Delete</button></td>
       </tr>
      )   
  })}

   </tbody>
   </table> 
  
  </>

)

}
