import React, { useEffect, useState } from 'react';
import Cardpoject from '../../components/CardProject/Cardpoject';
import Smpilcard from '../../components/smpilcard/smpilcard';
import { db } from '../../Firebase/Firebase';
function Portfolios() {
  const [Portfolios, setportfolios] = useState([]);

  useEffect(() => {
    const getDataportfolio = [];
    const subscriber = db.collection('protfolios').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getDataportfolio.push({ ...doc.data() });
      });
      setportfolios(getDataportfolio);
    });

    return () => subscriber();
  }, []);

  const getTotalPortfolios = (portfolios) => {
    return portfolios.reduce((accumulator, current) => {
      return accumulator + 1;
    }, 0);
  };


  
  console.log(Portfolios);

  return (
    <div className=" " style={{color:"#32383e"}}>
      <div className="bg-white border border-secondary-subtle rounded ">
        <h1 className="m-2">الأعمال</h1>
      </div>

      <div className="B-serves p-3 ">
      <Smpilcard cardName="الاجمالى الأعمال" cardValue={getTotalPortfolios(Portfolios)} />
         <Smpilcard cardName="بانتظار موافقة الأدارة" cardValue="2" />
        <Smpilcard cardName="يحتاج الى تعديلات" cardValue="4" />
         <Smpilcard cardName="نشط" cardValue="10" />
         <Smpilcard cardName=" متوقف مؤقتا" cardValue="16" />
         <Smpilcard cardName="مرفوض" cardValue="20" />
      </div>
      <div className="services-container bg-white border border-secondary-subtle mt-3 rounded"
      >
        <h1 className="m-2">الأعمال</h1>
        <hr/>
        <table className="table table-hover bg-white services-table ">
          <thead >
            <tr>
              <th>صاحب العمل</th>
              <th>اسم العمل </th>
              <th>تحكم في الخدمة</th>
            </tr>
          </thead>
          <tbody>
            {Portfolios.map((portfolio, index) => (
              <tr key={index}>
                <td><i class="fa-solid fa-user ms-2" style={{color: "#9ca1ab"}} ></i>{portfolio.name}</td>
                <td> <i class="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i>{portfolio.protfoloiName}</td>
                <td>
                <button className='btn btn-outline-danger p-2 rounded'>
              Delete
            </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Portfolios;
