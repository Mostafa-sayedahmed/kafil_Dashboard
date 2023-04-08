import React from 'react'
import Smpilcard from '../../components/smpilcard/smpilcard';
import CardofContext from '../../components/CardofContext/CardofContext';

export default function Context() {
  return (
        <>
        {/* start heading */}
        <div className="bg-white border rounded my-2 ">
          <h3 className="m-2 "> <i class="fa-solid fa-table-list ms-3" style={{color: "#28a745"}}></i>مسابقاتي </h3>
          <p  style={{border:'2px solid #28a745',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
        </div>
        {/* end heading */}

        {/* start cards */}
        <div className="B-serves p-3 ">
        <Smpilcard cardName=" بانتظار موافقه الاداره  " cardValue="0" />
        <Smpilcard cardName="يحتاج الى تعديلات" cardValue="0" />
        <Smpilcard cardName="منشور" cardValue="0" />
        <Smpilcard cardName="مرفوض" cardValue="0" />
        <Smpilcard cardName="مرحله تلقي العروض " cardValue="0" />
        <Smpilcard cardName=" مكتمل " cardValue="0" />
         </div>
      {/* end cards */}
      {/* start heading  two*/}
      <div className="bg-white border border-secondary-subtle my-3 rounded">
        <h3 className="m-2" > <i class="fa-solid fa-table-list ms-3" style={{color: "#28a745"}}></i> مسابقاتي </h3>
        <p  style={{border:'2px solid #28a745',width:'7%' ,margin: "0% 7% ",borderRadius:"5px"  }}></p>  
      </div>
      {/* end heading  two*/}
       {/* starting Table */}
    <table className="table table-hover bg-white">
    <thead>
    <tr>
      <th >#</th>
      <th >NamePerson</th>
      <th >NameContext</th>
      <th >NameCategory</th>
      <th >budget</th>
      <th >Complete</th>
    </tr>
  </thead>
    <tbody>
     <CardofContext hash="1" NamePerson="Arab Accredited" NameProject="تصميم هويه بصريه ولوجو لمتجر بيع مستحضرات تجميل"  NameCategory="تصميم" budget="45 "/>
     <CardofContext hash="2" NamePerson="Fahd Salm " NameProject="تصميم كرتون منتج كما هوا في الامثلة"  NameCategory="تصميم" budget="250 "/>
     <CardofContext hash="3" NamePerson= "Sunset Boulevard " NameProject="إقتراح اسم تجاري لبراند لمتجر بيع ملابس"  NameCategory="إختيار أسماء "budget="45 "/>
     <CardofContext hash="4" NamePerson="يوسف علي" NameProject="تصميم صورة لرجل و امرأة لمقدمة تطبيق جوال"  NameCategory="تصميم" budget="120 "/>
     <CardofContext hash="5" NamePerson= " Stylorita Official " NameProject="كتابة اعلان عن تطبيق لتحميل الفيديوهات "  NameCategory="كتابة و ترجمة" budget="45 "/>
     </tbody>
     </table>
      {/* end Table */}

        </>    
  )
}
