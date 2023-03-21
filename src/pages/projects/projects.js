import React from 'react'
import Cardpoject from '../../components/CardProject/Cardpoject'
import Smpilcard from '../../components/smpilcard/smpilcard'

export default function Projects() {
  return (
    
      <>  
      {/* start heading */}
    <div className="bg-white border rounded my-2 ">
        <h3 className="m-2 "> <i class="fa-solid fa-table-list ms-3" style={{color: "#9ca1ab"}}></i>مشاريعي </h3>
        <p  style={{border:'2px solid green',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
    </div>
      {/* end heading */}

      {/* start cards */}
      <div className="B-serves p-5 ">
        <Smpilcard cardName=" بانظار موافقه الاداره  " cardValue="0" />
        <Smpilcard cardName="يحتاج الى تعديلات" cardValue="0" />
        <Smpilcard cardName="منشور" cardValue="0" />
        <Smpilcard cardName="مرفوض" cardValue="0" />
        <Smpilcard cardName="مرحله تلقي العروض " cardValue="0" />
        <Smpilcard cardName=" مكتمل " cardValue="0" />
        <Smpilcard cardName=" قيد التنفيذ " cardValue="0" />
        <Smpilcard cardName=" تم الالغاء " cardValue="0" />
      </div>
      {/* end cards */}

      {/* start heading  two*/}
      <div className="bg-white border border-secondary-subtle my-3 rounded">
        <h3 className="m-2" > <i class="fa-solid fa-table-list ms-3" style={{color: "#9ca1ab"}}></i> المشاريع </h3>
        <p  style={{border:'2px solid green',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
      </div>
      {/* end heading  two*/}
      

      {/* starting Table */}
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
     <Cardpoject hash="1" NameProject="عمل موشن جرافيك" NamePerson="Sami Samir" Time="3" budget="$25 - $50"/>   
     <Cardpoject hash="2" NameProject="نحتاج الي مطور ومكود بلوجر " NamePerson="Imen Amri" Time="5" budget="$1000 - $2500"/>   
     <Cardpoject hash="3" NameProject=" مدون خبير سيو " NamePerson="Fadhel Al" Time="4" budget="$250 - $500"/>   
     <Cardpoject hash="4" NameProject=" اختبار اسم المشروع  " NamePerson="مصعب ابو بسمه" Time="7" budget="$25 - $50"/>   
     <Cardpoject hash="5" NameProject=" كارت عمل لمهندس معماري " NamePerson="BASHAR JAMAL" Time="5" budget="$250 - $500"/>   
     <Cardpoject hash="6" NameProject="  نريد شعارا جديدأ لصناعه وركمان" NamePerson="Khaled Zailaie" Time="2" budget="$25 - $50"/>   
     <Cardpoject hash="7" NameProject=" مطلوب تفعيل صفحة فيسبوك أجنبية للربح " NamePerson="Mohamed Abdula" Time="2" budget="$25 - $50"/>   
     </tbody>
     </table>
      {/* end Table */}
    </>

  )
}
