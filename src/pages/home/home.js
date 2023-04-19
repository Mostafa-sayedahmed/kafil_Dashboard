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
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



const Home = () => {

    //Data of First Chart  
    const options = {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: false,
       
        axisY: {
            title: "(عدد الخدمات مضروباً في (10)"
        },
        data: [
            {
                type: "area",
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0.## *10",
                dataPoints: [
                    { x: new Date(2017, 0), y: 7.6 },
                    { x: new Date(2016, 0), y: 7.3 },
                    { x: new Date(2015, 0), y: 6.4 },
                    { x: new Date(2014, 0), y: 5.3 },
                    { x: new Date(2013, 0), y: 4.5 },
                    { x: new Date(2012, 0), y: 3.8 },
                    { x: new Date(2011, 0), y: 3.2 }
                ]
            }
        ]


    }



    const options2 = {
        animationEnabled: true,
        
        subtitles: [{
            text: "71% يشعر بالرضا ",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "غير راضي", y: 5 },
                { name: " غير راضي بشدة", y: 31 },
                { name: " راضي عن الخدمات", y: 40 },
                { name: "راضي  بشدة", y: 17 },
                { name: "غير مهتم", y: 7 }
            ]
        }]
    }





    const [services, setServices] = useState([]);
    const [projects, setProjects] = useState([]);
    const [contest, setContest] = useState([]);
    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        const getDataServices = [];
        const getDataProjects = [];
        const getDataContests = [];
        const getDataPortfolios = [];
        const subscriber = db.collection("services").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDataServices.push({ ...doc.data() })
            })
            setServices(getDataServices)
        })
        const subscriberProject = db.collection("projects").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDataProjects.push({ ...doc.data() })
            })
            setProjects(getDataProjects)
        })
        const subscriberContests = db.collection("contests").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDataContests.push({ ...doc.data() })
            })
            setContest(getDataContests)
        })
        const subscriberPortfolios = db.collection("protfolios").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDataPortfolios.push({ ...doc.data() })
            })
            setPortfolios(getDataPortfolios)
        })
        return () => subscriber()
        subscriberProject()
        subscriberContests()
        subscriberPortfolios()
    }, [])

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
            <div className='home container-fluid'>



                <div className='fContainer row' >
                    <div className='d-flex justify-content-between borderBottom p-3 col-12'>
                        <div>
                            <h3>الرصيد</h3>
                        </div>
                        <div>
                            <Button variant="success" >شحن الرصيد</Button>
                        </div>
                    </div>
                    <div className=' col-12'>
                        <div className="d-flex justify-content-center borderBottom row">
                            <div className='p-3  text-center     	col-5	col-sm-5	col-md-5	col-lg-3	col-xl-3	col-xxl-3'>
                                <h3>مجموع الارباح</h3>
                                <h2>0.00$</h2>
                            </div>
                            <span class="divider" />
                            <div className='p-3  text-center   col-4	col-sm-4	col-md-4	col-lg-4	col-xl-4	col-xxl-4'>
                                <h3>اجمالي الرصيد </h3>
                                <h2>0.00$</h2>
                            </div>
                            <span className="divider d-none	d-sm-none	d-md-none	d-lg-block	d-xl-block	d-xxl-block " />
                            <div className='p-3  text-center col-12	col-sm-12	col-md-12	col-lg-3	col-xl-3	col-xxl-3'>
                                <h3>الرصيد القابل للسحب </h3>
                                <h2>0.00$</h2>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex justify-content-center m-3 col-12'>
                        <div className='mx-3'><a href="#">معلق:$0</a></div>
                        <div><a href="#">متاح للشراء:$0</a></div>
                    </div>
                </div>
                <div className='d-flex flex-wrap row'>
                    <Card header="الخدمات" progressValue1="100" one="عدد الخدمات المقدمة" oneNum={coutAllServices}
                        two="يحتاج إلى تعديلات" twoNum={countIsFeaturedServices} progressValue2={countIsFeaturedServices / coutAllServices * 100}
                        three="تمت الموافقة عليه" threeNum={countIsApprovedServices} progressValue3={countIsApprovedServices / coutAllServices * 100}
                        four="مرفوض" fourNum={countIsRejectedServices} progressValue4={countIsRejectedServices / coutAllServices * 100}
                    />






                    <Accordion className=' col-12	col-sm-12	col-md-8	col-lg-8	col-xl-8	col-xxl-8 my-2' defaultActiveKey={['0']} alwaysOpen >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><Icon.Star color="black" size={20} className="ms-2 mb-1" /><h6 style={{ color: "black" }}>المشاريع</h6></Accordion.Header>
                            <Accordion.Body>
                                <div className='d-flex'>
                                    <div className='w-50 mx-3'>  <div >
                                        <div className='d-flex justify-content-between text-center '>
                                            <div><p>  عدد المشاريع :  ({numProjects})</p></div>
                                            <div>100%</div>
                                        </div>
                                        <ProgressBar variant="success" className='mb-1' now={now + 100} style={{ height: '10px' }} />
                                    </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p>  المشاريع المكتملة : ({completedProjectes})</p></div>
                                                <div>{Math.floor(completedProjectes / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.floor(completedProjectes / numProjects * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>  تحتاج الى تعديل : ({uncompletedProjectes})</p></div>
                                                <div>{Math.floor(uncompletedProjectes / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.floor(uncompletedProjectes / numProjects * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>  المشاريع التي تمت الموافقة عليها : ({isApprovedProjects})</p></div>
                                                <div>{Math.round(isApprovedProjects / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(isApprovedProjects / numProjects * 100)} style={{ height: '10px' }} />
                                        </div></div>

                                    <div className='w-50 mx-3'>
                                        <div >
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p>  المشاريع المرفوضة :  ({isNotApprovedProjects})</p></div>
                                                <div>{Math.round(isNotApprovedProjects / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(isNotApprovedProjects / numProjects * 100)} style={{ height: '10px' }} />
                                        </div>

                                        <div >
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p>  قيد المراجعة  :  ({isFeaturedProjects})</p></div>
                                                <div>{Math.round(isFeaturedProjects / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(isFeaturedProjects / numProjects * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>تم الإلغاء   ({rejectedProjects})</p></div>
                                                <div>{Math.round(rejectedProjects / numProjects * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(rejectedProjects / numProjects * 100)} style={{ height: '10px' }} />
                                        </div>
                                    </div>

                                </div>


                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>



                    <Card header=" المسابقات"
                        one="عدد المسابقات المطروحة :" oneNum={constNum} progressValue1="100"
                        two=" المسابقات التي تم الموافقة عليها  :" twoNum={approvedConsts} progressValue2={approvedConsts / constNum * 100}
                        three="مستبعد :" threeNum={rejectedConstest} progressValue3={rejectedConstest / constNum * 100}
                        four=" المسابقات التي تم تنفيذها   :" fourNum={completedComstest} progressValue4={completedComstest / constNum * 100} />



                    <Accordion className=' col-12	col-sm-12	col-md-8	col-lg-8	col-xl-8	col-xxl-8 my-2' defaultActiveKey={['0']} alwaysOpen >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><Icon.Star color="black" size={20} className="ms-2 mb-1" /><h6 style={{ color: "black" }}>الأعمال</h6></Accordion.Header>
                            <Accordion.Body>
                                <div className='d-flex'>
                                    <div className='w-50 mx-3'>  <div >
                                        <div className='d-flex justify-content-between text-center '>
                                            <div><p>  عدد الأعمال  :  ({portfolisNum})</p></div>
                                            <div>100%</div>
                                        </div>
                                        <ProgressBar variant="success" className='mb-1' now={100} style={{ height: '10px' }} />
                                    </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p>  عدد الأعمال المكتملة : ({completedPort})</p></div>
                                                <div>{Math.round(completedPort / portfolisNum * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(completedPort / portfolisNum * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>  قيد المراجعة : ({unCompletedPort})</p></div>
                                                <div>{Math.round(unCompletedPort / portfolisNum * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(unCompletedPort / portfolisNum * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>  تمت الموافقة عليه من قبل الادارة : ({isApprovedPort})</p></div>
                                                <div>{Math.round(isApprovedPort / portfolisNum * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(isApprovedPort / portfolisNum * 100)} style={{ height: '10px' }} />
                                        </div></div>
                                    <div className='w-50 mx-3'>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p> مرفوض  ({isNotApprovedPort})</p></div>
                                                <div>{Math.round(isNotApprovedPort / portfolisNum * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(isNotApprovedPort / portfolisNum * 100)} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>تم الإلغاء   ({rejectedPort})</p></div>
                                                <div>{Math.round(rejectedPort / portfolisNum * 100)}%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={Math.round(rejectedPort / portfolisNum * 100)} style={{ height: '10px' }} />
                                        </div>
                                    </div>
                                </div>


                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>


                    <Accordion className=' col-12	col-sm-12	col-md-12	col-lg-12	col-xl-12	col-xxl-12 my-2' defaultActiveKey={['0']} alwaysOpen >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><Icon.PieChart color="black" size={20} className="ms-2 mb-1" /><h6 style={{ color: "black" }}>مبيعات الخدمات على المنصة خلال السنوات المختلفة </h6></Accordion.Header>
                            <Accordion.Body className="text-center">
                            <h3 className="my-3 ">           مبيعات الخدمات  المختلفة   
                                </h3>
                                <CanvasJSChart options={options} />


                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                    <Accordion className=' col-12	col-sm-12	col-md-12	col-lg-12	col-xl-12	col-xxl-12 my-2' defaultActiveKey={['0']} alwaysOpen >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><Icon.PieChart color="black" size={20} className="ms-2 mb-1" /><h6 style={{ color: "black" }}>
                                قياس نسبة رضا زوار الموقع عن التجربة
                            </h6></Accordion.Header>
                            <Accordion.Body className="text-center ">
                                <h3 className="my-2  ">           قياس نسبة رضا زوار الموقع
                                </h3>
                                <CanvasJSChart options={options2} />

                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>


                </div>
            </div>



        </>
    </>);
};

export default Home;
