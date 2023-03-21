import React from 'react'
import Smpilcard from '../../components/smpilcard/smpilcard'
import '../serves/serves.css'
 function Serves() {
  return (
    <div className=''>
      <div className='header'>

      </div>
        <div className='B-serves'>
        <Smpilcard cardName='الاجمالى الخدمات' cardValue='0'/>
        <Smpilcard/>
        <Smpilcard/>
        <Smpilcard/>
        <Smpilcard/>
        </div>
    </div>
  )
}
export default Serves