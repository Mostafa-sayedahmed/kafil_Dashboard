import React from 'react'

export default function CardofContext(props) {
  return (
       <>
      <tr>
        <th scope="row " className='ms-2'>{props.hash}</th>
        <td className='text-nowrap p-2'> <i class="fa-solid fa-user ms-2" style={{color: "#9ca1ab"}} ></i> {props.NamePerson}</td>
        <td className='text-nowrap p-2'> <i class="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i> {props.NameProject} </td>
        <td className='text-nowrap p-2'> <i class="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i> {props.NameCategory} </td>
        <td className='text-nowrap p-2'><i class="fa-solid fa-money-bill-1-wave ms-2" style={{color:" #9ca1ab"}}></i>{props.budget}</td>
        <td><input class="form-check-input" type="checkbox" value=""/></td>
    </tr>

       </> 
  )
}
