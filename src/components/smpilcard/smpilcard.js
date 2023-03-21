import React from 'react'
import '../smpilcard/smpilcard.css' 
function Smpilcard(props) {
  return (
    <div className='B-smpilcard'>
        <p>num{props.cardName}</p>
        <p>str{props.cardValue}</p>
    </div>
  )
}
export default Smpilcard