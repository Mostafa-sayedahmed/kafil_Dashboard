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




const Home = () => {
    const [services, setServices] = useState([]);
    const [projects, setProjects] = useState([]);
    const [contest, setContest] = useState([]);

    useEffect(() => {
        const getDataServices = [];
        const getDataProjects = [];
        const getDataContests = [];
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
        return () => subscriber()
        subscriberProject()
        subscriberContests()
    }, [])

    //Handeling  services
    var countIsApprovedServices = 0;
    var countIsRejectedServices = 0;
    var countIsFeaturedServices = 0;
    var coutAllServices = services.length
    for (let i = 0; i < services.length; i++) {
        if (services[i].isaproved == true) {
            countIsApprovedServices++
        }else{
            countIsRejectedServices++
        }
        if (services[i].isfeatured == true) {
            countIsFeaturedServices++
        }
        
    }

    //Handeling Projects
    let constNum=contest.length;
    let approvedConsts=0;
    let rejectedConstest=0;
    let completedComstest=0
    for (let index = 0; index < contest.length; index++) {
        if(contest[index].completed){
            completedComstest++
        }
       if(contest[index].accepted==true){
        approvedConsts++
       }else{
        rejectedConstest++
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
                        two="يحتاج إلى تعديلات" twoNum={countIsFeaturedServices} progressValue2={countIsFeaturedServices/coutAllServices*100}
                        three="تمت الموافقة عليه" threeNum={countIsApprovedServices} progressValue3={countIsApprovedServices/coutAllServices*100} four="مرفوض" fourNum={countIsRejectedServices} progressValue4={countIsRejectedServices/coutAllServices*100} />

                     <Card header="المبيعات " one="طلبات جديدة" oneNum="18"
                        two="مفتوح " twoNum="84"
                        three="قيد التنفيذ" threeNum="35" four="مرفوض" fourNum="0" />

                    <Card header="المشتريات" one="بإنتظار موافقة البائع  " oneNum="10"
                        two="قيد التنفيذ" twoNum="40"
                        three="مكتمل" threeNum="90" four="تم الإلغاء " fourNum="0" />




                    <Accordion className=' col-12	col-sm-12	col-md-8	col-lg-8	col-xl-8	col-xxl-8 my-2' defaultActiveKey={['0']} alwaysOpen >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><Icon.Gift color="black" size={20} className="ms-2 mb-1" /><h6 style={{ color: "black" }}>المشاريع</h6></Accordion.Header>
                            <Accordion.Body>
                                <div className='d-flex'>
                                    <div className='w-50 mx-3'>  <div >
                                        <div className='d-flex justify-content-between text-center '>
                                            <div><p>  قيد المراجعة  (50)</p></div>
                                            <div>50%</div>
                                        </div>
                                        <ProgressBar variant="success" className='mb-1' now={now + 50} style={{ height: '10px' }} />
                                    </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p>  التنفيذ (60)</p></div>
                                                <div>60%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now + 60} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>  مفتوح (90)</p></div>
                                                <div>90%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now + 90} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>  مكتمل (80)</p></div>
                                                <div>80%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now + 80} style={{ height: '10px' }} />
                                        </div></div>
                                    <div className='w-50 mx-3'>
                                        <div >
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p>  بإنتظار التعديل (60)</p></div>
                                                <div>60%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now + 60} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p>بإنتظار  الموافقة (60)</p></div>
                                                <div>60%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now + 60} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p> مرفوض  (0)</p></div>
                                                <div>0%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>تم الإلغاء   (0)</p></div>
                                                <div>0%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now} style={{ height: '10px' }} />
                                        </div>
                                    </div>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                  

                    <Card header=" المسابقات"
                     one="عدد المسابقات المطروحة :" oneNum={constNum} progressValue1="100"
                     two=" المسابقات التي تم الموافقة عليها  :" twoNum={approvedConsts} progressValue2={approvedConsts/constNum*100}
                    three="مستبعد :"  threeNum={rejectedConstest} progressValue3={rejectedConstest/constNum*100} 
                    four=" المسابقات التي تم تنفيذها   :" fourNum={completedComstest}  progressValue4={completedComstest/constNum*100}/>


  
                    <Accordion className=' col-12	col-sm-12	col-md-8	col-lg-8	col-xl-8	col-xxl-8 my-2' defaultActiveKey={['0']} alwaysOpen >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><Icon.Gift color="black" size={20} className="ms-2 mb-1" /><h6 style={{ color: "black" }}>المسابقات</h6></Accordion.Header>
                            <Accordion.Body>
                                <div className='d-flex'>
                                    <div className='w-50 mx-3'>  <div >
                                        <div className='d-flex justify-content-between text-center '>
                                            <div><p>  قيد المراجعة  (50)</p></div>
                                            <div>50%</div>
                                        </div>
                                        <ProgressBar variant="success" className='mb-1' now={now + 50} style={{ height: '10px' }} />
                                    </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p>  التنفيذ (60)</p></div>
                                                <div>60%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now + 60} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>  مفتوح (90)</p></div>
                                                <div>90%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now + 90} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>  مكتمل (80)</p></div>
                                                <div>80%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now + 80} style={{ height: '10px' }} />
                                        </div></div>
                                    <div className='w-50 mx-3'>
                                        <div >
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p>  بإنتظار التعديل (60)</p></div>
                                                <div>60%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now + 60} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center '>
                                                <div><p>بإنتظار  الموافقة (60)</p></div>
                                                <div>60%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now + 60} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p> مرفوض  (0)</p></div>
                                                <div>0%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now} style={{ height: '10px' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-between text-center'>
                                                <div><p>تم الإلغاء   (0)</p></div>
                                                <div>0%</div>
                                            </div>
                                            <ProgressBar variant="success" className='mb-1' now={now} style={{ height: '10px' }} />
                                        </div>
                                    </div>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                    <Card header="الخدمات" one="بإنتظار موافقة الإدارة" oneNum="10"
                        two="يحتاج إلى تعديلات" twoNum="50"
                        three="منشور" threeNum="90" four="مرفوض" fourNum="0" /> 

                </div>
            </div>

        </>
    </>);
};

export default Home;
