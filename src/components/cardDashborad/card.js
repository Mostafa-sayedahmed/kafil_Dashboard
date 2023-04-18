import Accordion from 'react-bootstrap/Accordion';
import * as Icon from  'react-bootstrap-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './card.css'
import CanvasJSReact from './../../assets/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Card(props) {
    const options = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light1", //"light1", "dark1", "dark2"
        title: {
            
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "pie", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                
                { x: 20, y: 55 },
                { x: 30, y: 50 },
                { x: 80, y: 92, },
                { x: 90, y: 54 ,  },
               
            ]
        }]
    }
   
    const now=0;
    return (  
        <Accordion className='col-12	col-sm-12	col-md-4	col-lg-4	col-xl-4	col-xxl-4 my-2' defaultActiveKey={['0']} alwaysOpen >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Icon.Star color="black" size={20} className="ms-2 mb-1"/><h6 style={{color:"black"}}>{props.header}</h6>
            </Accordion.Header>
          <Accordion.Body >
              <div >
                  <div className='d-flex justify-content-between text-center '>
                      <div><p>  {props.one} ({props.oneNum})</p></div>
                      <div>{Math.floor(props.progressValue1)}%</div>
                  </div>
                  <ProgressBar className='mb-1'  variant="success" now={props.progressValue1} style={{height:'10px'}} />
              </div>


              <div >
                  <div className='d-flex justify-content-between text-center '>
                      <div><p>  {props.two} ({props.twoNum})</p></div>
                      <div>{Math.floor(props.progressValue2)}%</div>
                  </div>
                  <ProgressBar  variant="success" className='mb-1' now={props.progressValue2} style={{height:'10px'}} />
              </div>


              <div >
                  <div className='d-flex justify-content-between text-center '>
                      <div><p>  {props.three} ({props.threeNum})</p></div>
                      <div>{Math.floor(props.progressValue3)}%</div>
                  </div>
                  <ProgressBar   variant="success" className='mb-1'  now={props.progressValue3} style={{height:'10px'}} />
              </div>


              <div >
                  <div className='d-flex justify-content-between text-center '>
                      <div><p>  {props.four} ({props.fourNum})</p></div>
                      <div>{Math.floor(props.progressValue4)}%</div>
                  </div>
                  <ProgressBar  variant="success" className='mb-1'  now={props.progressValue4} style={{height:'10px'}} />
              </div>
              <CanvasJSChart  options={options} 
                />
            
          </Accordion.Body>
        </Accordion.Item>
       
      </Accordion>
    );
}

export default Card;