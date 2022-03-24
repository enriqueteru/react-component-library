import React from 'react'
import LineAndText from '../UI/LineAndText'

const DetailsBlock = ({backgroundImg, name, job}) => {
  return (
    <div className='details-block' style={{ color:'white', background:`linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,1)), url('${backgroundImg}')`}}>
    <div className='details-block__content' style={{  transform: 'rotate(-90deg)'}}>  <LineAndText name={name} job={job} /> </div> 
    </div>
  )
}

export default DetailsBlock