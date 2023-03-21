import React from 'react'
import '../smpilcard/smpilcard.css' 
function Smpilcard(props) {
  return (
    <div className='B-smpilcard'>
        <p>{props.cardValue}</p>
        <p>{props.cardName}</p>
    </div>
  )
}
export default Smpilcard