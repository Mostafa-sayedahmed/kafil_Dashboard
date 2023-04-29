import React from "react";
import "./home.css";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import * as Icon from 'react-bootstrap-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from "../../components/cardDashborad/card";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useState, useEffect } from "react";
import { db } from "../../Firebase/Firebase";
import { logDOM } from "@testing-library/react";
import CanvasJSReact from './../../assets/canvasjs.react'
import { useTranslation } from "react-i18next";

// import { Column } from '@ant-design/plots';

import { Barchart } from "../../components/Barchart/Barchart";
// import { Await } from "react-router-dom";

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;




const Home = () => {

    const { t } = useTranslation();

    const [data, setData] = useState([]);

    //Data of First Chart  

    // const options = {
    //     theme: "light2",
    //     animationEnabled: true,
    //     exportEnabled: false,
       
    //     axisY: {
    //         title: t("Number_services_multiplied")
    //     },
    //     data: [
    //         {
    //             type: "area",
    //             xValueFormatString: "YYYY",
    //             yValueFormatString: "#,##0.## *10",
    //             dataPoints: [
    //                 { x: new Date(2017, 0), y: 7.6 },
    //                 { x: new Date(2016, 0), y: 7.3 },
    //                 { x: new Date(2015, 0), y: 6.4 },
    //                 { x: new Date(2014, 0), y: 5.3 },
    //                 { x: new Date(2013, 0), y: 4.5 },
    //                 { x: new Date(2012, 0), y: 3.8 },
    //                 { x: new Date(2011, 0), y: 3.2 }
    //             ]
    //         }
    //     ]


    // }



    // const options2 = {
    //     animationEnabled: true,
        
    //     subtitles: [{
    //         text:  t("feel_satisfied"),
    //         verticalAlign: "center",
    //         fontSize: 24,
    //         dockInsidePlotArea: true
    //     }],
    //     data: [{
    //         type: "doughnut",
    //         showInLegend: true,
    //         indexLabel: "{name}: {y}",
    //         yValueFormatString: "#,###'%'",
    //         dataPoints: [
    //             { name: t("not_satisfied"), y: 5 },
    //             { name: t("Strongly_dissatisfied"), y: 31 },
    //             { name: t("Satisfied_with_services"), y: 40 },
    //             { name: t("deeply_satisfied"), y: 17 },
    //             { name: t("not_interested"), y: 7 }
    //         ]
    //     }]
    // }



    // const data = props.data;

    // const config = {
      
    //   data,
    //   xField: 'Name',
    //   yField: 'number',
    //   xAxis: {
    //     label: {
    //       autoHide: true,
    //       autoRotate: false,
    //     },
    //   },
    //   meta: {
    //     Name: {
    //       alias: '类别',
    //     },
    //     number: {
    //       alias: '销售额',
    //     },
    //   },
    //   minColumnWidth: 20,
    //   maxColumnWidth: 20,
    // };


    const [services, setServices] = useState([]);
    const [projects, setProjects] = useState([]);
    const [contest, setContest] = useState([]);
    const [portfolios, setPortfolios] = useState([])

    const [servicesNum, setServicesNum] = useState(0);
    const [projectsNum, setProjectsNum] = useState(0);
    const [contestNum, setContestNum] = useState(0);
    const [portfoliosNum, setPortfoliosNum] = useState(0)


    const fetchContests = async () => {

        const getDataContests = [];
       await db.collection("contests").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDataContests.push({ ...doc.data() })
            })
            setContest(getDataContests);
            setContestNum(Number(getDataContests.length))
        })
 
      }

      const fetchServices = async () => {

        const getDataServices = [];
        await db.collection("services").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDataServices.push({ ...doc.data() })
            })
            setServices(getDataServices);
            setServicesNum(Number(getDataServices.length))
        })

      }

      const fetchProjects = async () => {

        const getDataProjects = [];
        await db.collection("projects").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDataProjects.push({ ...doc.data() })
            })
            setProjects(getDataProjects);
            setProjectsNum(Number(getDataProjects.length))
        })

      }
    

      const fetchPortfolios = async () => {

        const getDataPortfolios = [];
        await db.collection("protfolios").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDataPortfolios.push({ ...doc.data() })
            })
            setPortfolios(getDataPortfolios);
            setPortfoliosNum(Number(getDataPortfolios.length))
        })

      }
    
    useEffect( () => {

        fetchContests();
        fetchServices();
        fetchProjects();
        fetchPortfolios();

        setData (
            [ {
                  Name: t("services"),
                  number: servicesNum
                },
                {
                  Name: t("contests"),
                  number: contestNum
                },
                {
                  Name: t("projects"),
                  number: projectsNum
                },
                {
                  Name: t("works"),
                  number: portfoliosNum
                }
              ]
        );
        
    }, [servicesNum , contestNum , projectsNum , portfoliosNum , t] );


    //Handeling  services
    var countIsApprovedServices = 0;
    var countIsRejectedServices = 0;
    var countIsFeaturedServices = 0;
    var coutAllServices = services.length
    for (let i = 0; i < services.length; i++) {
        if (services[i].isaproved == true) {
            countIsApprovedServices++
        } else {
            countIsRejectedServices++
        }
        if (services[i].isfeatured == true) {
            countIsFeaturedServices++
        }

    }

    //Handeling Constets
    let constNum = contest.length;
    let approvedConsts = 0;
    let rejectedConstest = 0;
    let completedComstest = 0
    for (let index = 0; index < contest.length; index++) {
        if (contest[index].completed) {
            completedComstest++
        }
        if (contest[index].accepted == true) {
            approvedConsts++
        } else {
            rejectedConstest++
        }
    }


    //Handeling projects
    let numProjects = projects.length;
    let completedProjectes = 0;
    let uncompletedProjectes = 0
    let isApprovedProjects = 0;
    let isNotApprovedProjects = 0;
    let isFeaturedProjects = 0;
    let isNotFeaturedProjects = 0
    let accpetedProjects = 0;
    let rejectedProjects = 0;
    for (let index = 0; index < projects.length; index++) {
        if (projects[index].completed) {
            completedProjectes++
        } else {
            uncompletedProjectes++
        } if (projects[index].isApproved) {
            isApprovedProjects++
        } else {
            isNotApprovedProjects++
        } if (projects[index].isFeatured) {
            isFeaturedProjects++;
        } else {
            isNotFeaturedProjects++
        }
        if (projects[index].accepted) {
            accpetedProjects++
        } else {
            rejectedProjects++
        }
    }

    // Handleing portfolios
    let portfolisNum = portfolios.length;
    let completedPort = 0;
    let unCompletedPort = 0;
    let isApprovedPort = 0;
    let isNotApprovedPort = 0;
    let rejectedPort = 0;
    for (let index = 0; index < portfolios.length; index++) {
        if (portfolios[index].completed) {
            completedPort++
        } else {
            unCompletedPort++
        }
        if (portfolios[index].isApproved) {
            isApprovedPort++
        } else {
            isNotApprovedPort++
        }
        if (portfolios[index].rejected) {
            rejectedPort++
        }
    }

    const now = 0;

    return (<>
        <>

            <div className='home py-5 container-fluid'>

                <div className="mb-4">
                    <Barchart data={data} />
                </div>

                <div className='d-flex flex-wrap row'>
                    <Card header={t("services")} progressValue1="100" one={t("numServices")} oneNum={coutAllServices}
                        two={t("needs_modifications")} twoNum={countIsFeaturedServices} progressValue2={countIsFeaturedServices / coutAllServices * 100}
                        three={t("accepted")} threeNum={countIsApprovedServices} progressValue3={countIsApprovedServices / coutAllServices * 100}
                        four={t("not_accepted")} fourNum={countIsRejectedServices} progressValue4={countIsRejectedServices / coutAllServices * 100}
                    />

                    <Accordion className=' col-12	col-sm-12	col-md-8	col-lg-8	col-xl-8	col-xxl-8 my-2' defaultActiveKey={['0']} alwaysOpen >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><Icon.Star color="black" size={20} className="ms-2 mb-1" /><h6 style={{ color: "black" }}>{t("projects")}</h6></Accordion.Header>
                            <Accordion.Body>
                                <div className='d-flex'>
                                    <div className='w-50 mx-3'>  <div >
                                        <div className='d-flex justify-content-between text-center '>
                                            <div><p> {t("numProjects")}  :  ({numProjects})</p></div>
                                            <div>100%</div>
                                        </div>
                                        <ProgressBar variant="success" className='mb-1' now={now + 100} style={{ height: '10px' }} />
                                    </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p> {t("completed")}: ({completedProjectes})</p></div>
                                                <div>{Math.floor(completedProjectes / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.floor(completedProjectes / numProjects * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p> {t("needs_modifications")}: ({uncompletedProjectes})</p></div>
                                                <div>{Math.floor(uncompletedProjectes / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.floor(uncompletedProjectes / numProjects * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p> {t("accepted")}: ({isApprovedProjects})</p></div>
                                                <div>{Math.round(isApprovedProjects / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(isApprovedProjects / numProjects * 100)} style={{ height: '10px' }} />
                                        </div></div>

                                    <div className='w-50 mx-3'>
                                        <div >
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p>  {t("not_accepted")}:  ({isNotApprovedProjects})</p></div>
                                                <div>{Math.round(isNotApprovedProjects / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(isNotApprovedProjects / numProjects * 100)} style={{ height: '10px' }} />
                                        </div>

                                        <div >
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p> {t("under_review")} :  ({isFeaturedProjects})</p></div>
                                                <div>{Math.round(isFeaturedProjects / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(isFeaturedProjects / numProjects * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>{t("canceled")}   ({rejectedProjects})</p></div>
                                                <div>{Math.round(rejectedProjects / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(rejectedProjects / numProjects * 100)} style={{ height: '10px' }} />
                                        </div>
                                    </div>

                                </div>


                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>



                    <Card header={t("contest")}
                        one={t("numContest")} oneNum={constNum} progressValue1="100"
                        two={t("accepted")} twoNum={approvedConsts} progressValue2={approvedConsts / constNum * 100}
                        three={t("not_accepted")} threeNum={rejectedConstest} progressValue3={rejectedConstest / constNum * 100}
                        four={t("completed")} fourNum={completedComstest} progressValue4={completedComstest / constNum * 100} />



                    <Accordion className=' col-12	col-sm-12	col-md-8	col-lg-8	col-xl-8	col-xxl-8 my-2' defaultActiveKey={['0']} alwaysOpen >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><Icon.Star color="black" size={20} className="ms-2 mb-1" /><h6 style={{ color: "black" }}>{t("works")}</h6></Accordion.Header>
                            <Accordion.Body>
                                <div className='d-flex'>
                                    <div className='w-50 mx-3'>  <div >
                                        <div className='d-flex justify-content-between text-center '>
                                            <div><p> {t("numWorks")}:  ({portfolisNum})</p></div>
                                            <div>100%</div>
                                        </div>
                                        <ProgressBar variant="success" className='mb-1' now={100} style={{ height: '10px' }} />
                                    </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p> {t("completed")} : ({completedPort})</p></div>
                                                <div>{Math.round(completedPort / portfolisNum * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(completedPort / portfolisNum * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>   {t("under_review")}: ({unCompletedPort})</p></div>
                                                <div>{Math.round(unCompletedPort / portfolisNum * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(unCompletedPort / portfolisNum * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p> {t("accepted")}: ({isApprovedPort})</p></div>
                                                <div>{Math.round(isApprovedPort / portfolisNum * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(isApprovedPort / portfolisNum * 100)} style={{ height: '10px' }} />
                                        </div></div>
                                    <div className='w-50 mx-3'>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p> {t("not_accepted")}  ({isNotApprovedPort})</p></div>
                                                <div>{Math.round(isNotApprovedPort / portfolisNum * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(isNotApprovedPort / portfolisNum * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>{t("canceled")}   ({rejectedPort})</p></div>
                                                <div>{Math.round(rejectedPort / portfolisNum * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(rejectedPort / portfolisNum * 100)} style={{ height: '10px' }} />
                                        </div>
                                    </div>
                                </div>


                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>


                    {/* <Accordion className=' col-12	col-sm-12	col-md-12	col-lg-12	col-xl-12	col-xxl-12 my-2' defaultActiveKey={['0']} alwaysOpen >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><Icon.PieChart color="black" size={20} className="ms-2 mb-1" /><h6 style={{ color: "black" }}> {t("Sales_of_services")} </h6></Accordion.Header>
                            <Accordion.Body className="text-center">
                            <h3 className="my-3 "> {t("Sales_of_various")} 
                                </h3>
                                <CanvasJSChart options={options} />


                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion> */}

                    {/* <Accordion className=' col-12	col-sm-12	col-md-12	col-lg-12	col-xl-12	col-xxl-12 my-2' defaultActiveKey={['0']} alwaysOpen >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><Icon.PieChart color="black" size={20} className="ms-2 mb-1" /><h6 style={{ color: "black" }}>
                            {t("Measuring_percentage")} 
                            </h6></Accordion.Header>
                            <Accordion.Body className="text-center ">
                                <h3 className="my-2  ">{t("Measuring_site_visitor")} 
                                </h3>
                                <CanvasJSChart options={options2} />

                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion> */}


                </div>
            </div>



        </>
    </>);
};

export default Home;
