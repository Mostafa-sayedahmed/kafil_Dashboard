import React from 'react'
import Card from '../../components/Card/Card'

export default function Projects() {
  return (
  <>
  <table class="table table-hover bg-white">
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
     <Card NameProject="عمل موشن جرافيك" NamePerson="Sami Samir" Time="4h" budget="$25 - $50"/>   
     <Card NameProject="عمل موشن جرافيك" NamePerson="Sami Samir" Time="4h" budget="$25 - $50"/>   
     <Card NameProject="عمل موشن جرافيك" NamePerson="Sami Samir" Time="4h" budget="$25 - $50"/>   
     </tbody>
     </table>
    </>
  )
}
