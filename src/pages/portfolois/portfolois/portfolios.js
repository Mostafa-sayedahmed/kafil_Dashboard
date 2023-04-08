import React from 'react'
import Cardpoject from '../../../components/CardProject/Cardpoject'
import Smpilcard from '../../../components/smpilcard/smpilcard'

 function Portfolios() {


  
  return (
    <div className=" ">
      <div className="bg-white border border-secondary-subtle  rounded ">
        <h1 className="m-2">الأعمال</h1>
      </div>
      <div className="B-serves p-3 ">
        <Smpilcard cardName="الاجمالى الأعمال" cardValue="0" />
        <Smpilcard cardName="بانتظار موافقة " cardValue="0" />
        <Smpilcard cardName="يحتاج الى تعديلات" cardValue="0" />
        <Smpilcard cardName="نشط" cardValue="0" />
        <Smpilcard cardName=" متوقف مؤقتا" cardValue="0" />
        <Smpilcard cardName="مرفوض" cardValue="0" />
      </div>
      <div className="services-container bg-white border border-secondary-subtle mt-3 rounded">
        <h1 className="m-2">الأعمال</h1>
        {/* <Container > */}
        <table className="table table-hover bg-white services-table">
          <thead>
            <tr>
              <th>#</th>
              <th>اسم الخدمة</th>
              <th>صاحب الخدمة</th>
              <th>الوقت</th>
              <th>الميزانية</th>
              <th>تحكم في الخدمة</th>
            </tr>
          </thead>
          <tbody>
            <Cardpoject
              hash="1"
              NameProject="مصمم ويب"
              NamePerson="Sami Samir"
              Time="3"
              budget="$25 - $50"
            />
            <Cardpoject
              hash="1"
              NameProject="مصمم ويب"
              NamePerson="Sami Samir"
              Time="3"
              budget="$25 - $50"
            />
            <Cardpoject
              hash="2"
              NameProject="نحتاج الي مطور ومكود بلوجر "
              NamePerson="Imen Amri"
              Time="5"
              budget="$25 - $50"
            />
            <Cardpoject
              hash="3"
              NameProject=" مطلوب موقع الكتروني يكون ترتية جيد"
              NamePerson="Ahmed Hesham"
              Time="4"
              budget="$250 - $500"
            />
            <Cardpoject
              hash="1"
              NameProject="مصمم ويب"
              NamePerson="Sami Samir"
              Time="3"
              budget="$25 - $50"
            />
            <Cardpoject
              hash="1"
              NameProject="مصمم ويب"
              NamePerson="Sami Samir"
              Time="3"
              budget="$25 - $50"
            />
            <Cardpoject
              hash="1"
              NameProject="مصمم ويب"
              NamePerson="Sami Samir"
              Time="3"
              budget="$25 - $50"
            />
            <Cardpoject
              hash="2"
              NameProject="نحتاج الي مطور ومكود بلوجر "
              NamePerson="Imen Amri"
              Time="5"
              budget="$25 - $50"
            />
            <Cardpoject
              hash="3"
              NameProject=" مطلوب موقع الكتروني يكون ترتية جيد"
              NamePerson="Ahmed Hesham"
              Time="4"
              budget="$250 - $500"
            />
            <Cardpoject
              hash="1"
              NameProject="مصمم ويب"
              NamePerson="Sami Samir"
              Time="3"
              budget="$25 - $50"
            />
            <Cardpoject
              hash="2"
              NameProject="نحتاج الي مطور ومكود بلوجر "
              NamePerson="Imen Amri"
              Time="5"
              budget="$25 - $50"
            />
            <Cardpoject
              hash="3"
              NameProject=" مطلوب موقع الكتروني يكون ترتية جيد"
              NamePerson="Ahmed Hesham"
              Time="4"
              budget="$250 - $500"
            />
          </tbody>
        </table>
        {/* </Container> */}
      </div>
    </div>
  )
}
export default Portfolios
