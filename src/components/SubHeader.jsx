import React from 'react'
import star from '../assets/images/Star.png';
export default function SubHeader({title, viewAll=false}) {
  return (
    <div className="sub-header-wrapper">
        <h4 className='sub_header'> <img src={star} alt="" className='start_image' /> {title || 'Expertise'}</h4>
        {viewAll && <p className=''>view ALl</p>}
    </div>
  )
}
