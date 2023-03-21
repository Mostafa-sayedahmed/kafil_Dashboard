import Accordion from 'react-bootstrap/Accordion';
import * as Icon from  'react-bootstrap-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Card(props) {
    console.log(props);
    const now=0;
    return (  
        <Accordion className='AccordionOne' defaultActiveKey={['0']} alwaysOpen >
        <Accordion.Item eventKey="0">
          <Accordion.Header><Icon.Bag color="black" size={20} className="ms-2 mb-1"/><h6 style={{color:"black"}}>{props.header}</h6></Accordion.Header>
          <Accordion.Body >
              <div >
                  <div className='d-flex justify-content-between text-center '>
                      <div><p>  {props.one} ({props.oneNum})</p></div>
                      <div>{props.oneNum}%</div>
                  </div>
                  <ProgressBar className='mb-1'  variant="success" now={now+props.oneNum} style={{height:'10px'}} />
              </div>


              <div >
                  <div className='d-flex justify-content-between text-center '>
                      <div><p>  {props.two} ({props.twoNum})</p></div>
                      <div>{props.twoNum}%</div>
                  </div>
                  <ProgressBar  variant="success" className='mb-1'  now={now+props.twoNum} style={{height:'10px'}} />
              </div>


              <div >
                  <div className='d-flex justify-content-between text-center '>
                      <div><p>  {props.three} ({props.threeNum})</p></div>
                      <div>{props.threeNum}%</div>
                  </div>
                  <ProgressBar   variant="success" className='mb-1'  now={now+props.threeNum} style={{height:'10px'}} />
              </div>


              <div >
                  <div className='d-flex justify-content-between text-center '>
                      <div><p>  {props.four} ({props.fourNum})</p></div>
                      <div>{props.fourNum}%</div>
                  </div>
                  <ProgressBar  variant="success" className='mb-1'  now={now+props.fourNum} style={{height:'10px'}} />
              </div>
            
          </Accordion.Body>
        </Accordion.Item>
       
      </Accordion>
    );
}

export default Card;