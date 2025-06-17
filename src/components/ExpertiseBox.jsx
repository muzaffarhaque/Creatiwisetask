import React from 'react'
import star from '../assets/images/Star.png';
export default function ExpertiseBox({key,title}) {
  return (
    <div key={key} className="expertise_box">
        <h5><img src={star} alt="" className='start_image' /> {title || 'Branding'}</h5>
        <p>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites..</p>
    </div>
  )
}
