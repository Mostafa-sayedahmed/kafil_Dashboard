import React from 'react'
 import './Card.css'

export default function Card(props) {
  return (

    //    <div className='d-flex bg-white  justify-content-between align-items-center p-3 mt-5 border rounded'>
    //         <h4 className='mx-4 bghover'> {props.NameProject} </h4>
    //         <h5 className='mx-4 bghover'> {props.NamePerson}</h5>
    //         <h6 className='mx-4 bghover'> {props.Time} </h6>
    //         <h6 className='mx-4 bghover'> {props.budget} </h6> 
    //         <button className='btn btn-outline-danger p-2 rounded'>Delete</button>      
    //    </div>          
       
        

  
    <tr>
      <th scope="row">1</th>
      <td>{props.NameProject}</td>
      <td>{props.NamePerson}</td>
      <td>{props.Time}</td>
      <td>{props.budget}</td>
      <td><button className='btn btn-outline-danger p-2 rounded'>Delete</button></td>
    </tr>



       

  )
}
