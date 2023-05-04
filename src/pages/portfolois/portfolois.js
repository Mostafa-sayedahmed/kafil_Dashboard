import React, { useEffect, useState } from 'react';
import Smpilcard from '../../components/smpilcard/smpilcard';
import { db } from '../../Firebase/Firebase';
import { deleteDoc, doc } from 'firebase/firestore';

import { useTranslation } from "react-i18next";
import { Doughnutchart } from "../../components/doughnutchart/doughnutchart";

function Portfolios() {

  const { t } = useTranslation();


  const [Portfolios, setportfolios] = useState([]);


  useEffect(() => {
    getportfolios()
  }, []);

  const getportfolios = async () => {
    const getDataportfolio = [];
    const getData = db.collection('protfolios').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getDataportfolio.push({ ...doc.data(), portfoloiId: doc.id });
      });
      setportfolios(getDataportfolio);

    });

    return () => getData();
  }


  const getTotalPortfolios = (portfolios) => {
    return portfolios.reduce((accumulator, current) => {
      return accumulator + 1;
    }, 0);
  };


  const getCompletedPortfolios = (portfolios) => {
    return portfolios.reduce((accumulator, current) => {
      if (current.completed) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);
  };

  const getUncompletedPortfolios = (portfolios) => {
    return portfolios.reduce((accumulator, current) => {
      if (!current.completed) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);
  };


 

  async function deletePortfolio(id) {
    try {
      const portfolioRef = doc(db, "protfolios", id);
      await deleteDoc(portfolioRef);
      console.log(`Document with ID ${id} deleted successfully.`);
      getportfolios()
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  }




  console.log(Portfolios);

  return (
    <div className=" " style={{ color: "#32383e" }}>

      <div className="bg-white border border-secondary-subtle rounded ">
        <h1 className="m-2">{t("works")}</h1>
      </div>

     

   <div>
    

      {/* <div className="B-serves p-3 d-flex  flex-column"> */}
      <div className="B-serves p-3">
      {/* <div className=" d-flex align-items-center justify-content-center">
   
          <Doughnutchart
                colors={[        
                  "rgba(100, 226, 86, 0.3)",
                  "rgba(255, 206, 86, 0.3)",  
                ]}
                labels={[t("completed"), t("not_completed")]}
                Values={[getCompletedPortfolios(Portfolios), getUncompletedPortfolios(Portfolios)]}
            />
    
         
      </div>
      <div className='d-flex justify-content-around flex-wrap'> */}
        <Smpilcard cardName={t("total_portfolios")} cardValue={getTotalPortfolios(Portfolios)} />
          <Smpilcard cardName={t("completed")} cardValue={getCompletedPortfolios(Portfolios)} />
          <Smpilcard cardName={t("not_completed")} cardValue={getUncompletedPortfolios(Portfolios)} />
      {/* </div> */}
    
      </div>
   </div>
    
      <div className="services-container bg-white border border-secondary-subtle mt-3 rounded"
      >
        <h1 className="m-2">{t("works")}</h1>

        <hr />
        <table className="table table-hover bg-white services-table ">
          <thead >
            <tr>

              <th>{t("work_owner")}</th>
              <th>{t("work")}</th>
              <th>{t("work_status")}</th>
              <th>{t("service_control")}</th>

            </tr>
          </thead>
          <tbody>
            {Portfolios.map((portfolio, index) => (
              <tr key={index}>
                <td><i class="fa-solid fa-user ms-2" style={{ color: "#9ca1ab" }} ></i>{portfolio.name}</td>
                <td> <i class="fa-solid fa-list-check ms-2" style={{ color: "#9ca1ab" }}></i>{portfolio.protfoloiName}</td>
                <td>
                  {portfolio.completed ? (
                    <i className="fa-solid fa-check-circle text-success"></i>
                  ) : (
                    <i className="fa-solid fa-times-circle text-danger"></i>
                  )}
                </td>                <td>
                  <button className='btn btn-outline-danger p-2 rounded' onClick={() => deletePortfolio(portfolio.portfoloiId)}>
                  {t("delete")}

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
