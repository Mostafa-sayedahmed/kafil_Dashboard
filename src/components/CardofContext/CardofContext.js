import React from 'react'

export default function CardofContext(props) {
  return (
       <>
      <tr>
        <th scope="row " className='ms-2'>{props.index}</th>
        <td className='text-nowrap p-2'> <i class="fa-solid fa-user ms-2" style={{color: "#9ca1ab"}} ></i> {props.name}</td>
        <td className='text-nowrap p-2'> <i class="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i> {props.contest} </td>
        <td className='text-nowrap p-2'> <i class="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i> {props.section} </td>
        <td className='text-nowrap p-2'><i class="fa-solid fa-money-bill-1-wave ms-2" style={{color:" #9ca1ab"}}></i>{props.award}</td>
        <td><input class="form-check-input" type="checkbox" value=""/></td>
      </tr>

       </> 
  )
}
