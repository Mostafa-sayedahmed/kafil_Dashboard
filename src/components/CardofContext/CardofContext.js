import React from 'react'
import {Link} from 'react-router-dom';

export default function CardofContext(props) {


  return(
       <>
      <tr>
        <th scope="row " className='ms-2'>{props.index}</th>
        <td className='text-nowrap p-2'><i class="fa-solid fa-user ms-2" style={{color: "#9ca1ab"}} ></i> {props.name}</td>
        <td className='text-nowrap p-2'><i class="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i> {props.contest} </td>
        <td className='text-nowrap p-2'><i class="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i> {props.section} </td>
        <td className='text-nowrap p-2'><i class="fa-solid fa-money-bill-1-wave ms-2" style={{color:" #9ca1ab"}}></i>{props.award}</td>
        <td><input class="form-check-input" type="checkbox"
        onChange={(e)=>{
          
        }}
        checked={props.checked}/></td>
        <td className='text-nowrap p-2'> <Link type='button' onClick={ () =>{
            props.DeleteAlert()  
           }}>
           <i className="fa-solid fa-trash text-danger fs-6"></i>
          </Link></td>
        
      </tr>

       </> 
  )
}
