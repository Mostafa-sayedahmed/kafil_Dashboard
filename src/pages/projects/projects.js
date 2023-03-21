import React from 'react'

export default function Projects() {
  return (
    

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
     <Card hash="1" NameProject="عمل موشن جرافيك" NamePerson="Sami Samir" Time="3" budget="$25 - $50"/>   
     <Card hash="2" NameProject="نحتاج الي مطور ومكود بلوجر " NamePerson="Imen Amri" Time="5" budget="$25 - $50"/>   
     <Card hash="3" NameProject=" مطلوب موقع الكتروني يكون ترتية جيد" NamePerson="Ahmed Hesham" Time="4" budget="$250 - $500"/>   
     </tbody>
     </table>
    </>

  )
}
