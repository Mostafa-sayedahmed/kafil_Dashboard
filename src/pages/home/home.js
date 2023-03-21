import React from "react";
import "./home.css";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import * as Icon from  'react-bootstrap-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from "../../components/cardDashborad/card";

const Home = () => {
  const now=0;
  return ( <>
    <>
       <div className='home'>
       {/* <Alert className='p-3 my-3 mx-2' variant='success'>
       فى 5 ثواني, إربط حسابك بـ تلجرام/تويتر لتستلم تنبيهات فورية عند شراء خدماتك إذا كنت بائع و أخري هامة إذا كنت مشتري
       </Alert> */}
           <div className='fContainer' >
               <div className='d-flex justify-content-between borderBottom p-3'>
                   <div>
                       <h3>الرصيد</h3>
                   </div>
                   <div>
                   <Button variant="success">شحن الرصيد</Button>
                   </div>
               </div>
               <div className='d-flex justify-content-around borderBottom'>
               
                   <div className='p-3 m-3 text-center'>
                       <h3>مجموع الارباح</h3>
                       <h2>0.00$</h2>
                   </div>
                   <span class="divider" />
                   <div className='p-3 m-3 text-center'>
                   <h3>اجمالي الرصيد </h3>
                   <h2>0.00$</h2>
                   </div>
                   <span class="divider" />
                   <div className='p-3 m-3 text-center'>
                       <h3>الرصيد القابل للسحب </h3>
                       <h2>0.00$</h2>
                       </div>
                       
               </div>
               <div className='d-flex justify-content-center m-3'>
                   <div className='mx-3'><a href="#">معلق:$0</a></div>
                   <div><a href="#">متاح للشراء:$0</a></div>
               </div>
           </div>
           <div className='d-flex flex-wrap'>
           <Card header="الخدمات"  one="بإنتظار موافقة الإدارة" oneNum="10"
            two="يحتاج إلى تعديلات" twoNum="50"
             three="منشور" threeNum="90" four="مرفوض" fourNum="0" />

<Card header="المبيعات "  one="طلبات جديدة" oneNum="18"
            two="مفتوح " twoNum="84"
             three="قيد التنفيذ" threeNum="35" four="مرفوض" fourNum="0" />

<Card header="المشتريات"  one="بإنتظار موافقة البائع  " oneNum="10"
            two="قيد التنفيذ" twoNum="40"
             three="مكتمل" threeNum="90" four="تم الإلغاء " fourNum="0" />



   
<Accordion className='AccordionTwo' defaultActiveKey={['0']} alwaysOpen >
     <Accordion.Item eventKey="0">
       <Accordion.Header ><Icon.Gift color="black" size={20} className="ms-2 mb-1" /><h6 style={{color:"black"}}>المشاريع</h6></Accordion.Header>
       <Accordion.Body>
       <div className='d-flex'>
               <div className='w-50 mx-3'>  <div >
               <div className='d-flex justify-content-between text-center '>
                   <div><p>  قيد المراجعة  (50)</p></div>
                   <div>50%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now+50} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center '>
                   <div><p>  التنفيذ (60)</p></div>
                   <div>60%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now+60} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center'>
                   <div><p>  مفتوح (90)</p></div>
                   <div>90%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now+90} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center'>
                   <div><p>  مكتمل (80)</p></div>
                   <div>80%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now+80} style={{height:'10px'}} />
           </div></div>
               <div className='w-50 mx-3'>
               <div >
               <div className='d-flex justify-content-between text-center '>
                   <div><p>  بإنتظار التعديل (60)</p></div>
                   <div>60%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now+60} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center '>
                   <div><p>بإنتظار  الموافقة (60)</p></div>
                   <div>60%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now+60} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center'>
                   <div><p> مرفوض  (0)</p></div>
                   <div>0%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center'>
                   <div><p>تم الإلغاء   (0)</p></div>
                   <div>0%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now} style={{height:'10px'}} />
           </div>
               </div>
           </div>
         
       </Accordion.Body>
     </Accordion.Item>
    
   </Accordion>

   <Card header=" المسابقات"  one="بإنتظار إختيار الفائز  " oneNum="10"
            two="فائز " twoNum="80"
             three="مستبعد" threeNum="20" four="مرفوض" fourNum="0" />


  
   <Accordion className='AccordionTwo' defaultActiveKey={['0']} alwaysOpen >
     <Accordion.Item eventKey="0">
       <Accordion.Header ><Icon.Gift color="black" size={20} className="ms-2 mb-1" /><h6 style={{color:"black"}}>المسابقات</h6></Accordion.Header>
       <Accordion.Body>
       <div className='d-flex'>
               <div className='w-50 mx-3'>  <div >
               <div className='d-flex justify-content-between text-center '>
                   <div><p>  قيد المراجعة  (50)</p></div>
                   <div>50%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now+50} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center '>
                   <div><p>  التنفيذ (60)</p></div>
                   <div>60%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now+60} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center'>
                   <div><p>  مفتوح (90)</p></div>
                   <div>90%</div>
               </div>
               <ProgressBar   variant="success" className='mb-1'  now={now+90} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center'>
                   <div><p>  مكتمل (80)</p></div>
                   <div>80%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now+80} style={{height:'10px'}} />
           </div></div>
               <div className='w-50 mx-3'>
               <div >
               <div className='d-flex justify-content-between text-center '>
                   <div><p>  بإنتظار التعديل (60)</p></div>
                   <div>60%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now+60} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center '>
                   <div><p>بإنتظار  الموافقة (60)</p></div>
                   <div>60%</div>
               </div>
               <ProgressBar   variant="success" className='mb-1'  now={now+60} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center'>
                   <div><p> مرفوض  (0)</p></div>
                   <div>0%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now} style={{height:'10px'}} />
           </div>
           <div>
               <div className='d-flex justify-content-between text-center'>
                   <div><p>تم الإلغاء   (0)</p></div>
                   <div>0%</div>
               </div>
               <ProgressBar  variant="success" className='mb-1'  now={now} style={{height:'10px'}} />
           </div>
               </div>
           </div>
         
       </Accordion.Body>
     </Accordion.Item>
    
   </Accordion>
   <Card header="الخدمات"  one="بإنتظار موافقة الإدارة" oneNum="10"
            two="يحتاج إلى تعديلات" twoNum="50"
             three="منشور" threeNum="90" four="مرفوض" fourNum="0" />
  
           </div>
       </div>
   
   </>
   </> );
   };

   export default Home;
   