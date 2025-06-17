import React from "react";
import ellips from '../assets/images/Ellipse.png';
import work1 from '../assets/images/workImage.png';
import work2 from '../assets/images/work2.png';
import work3 from '../assets/images/work3.png';
const workImages = [work1, work2, work3];
export default function WorkCard({index,title}) {
    console.log('workImages', workImages[index],index);
  return (
    <div  className="word-card-box">
      <div className="img-box mb-full">
        <img src={workImages[index]} alt="" />
      </div>
      <div className="content-box mb-full">
        <div className="uppper-text">
          <h5>{title || 'Analysis Application'}</h5>
          <p>
            With a user-centered approach, the goal was to create an intuitive
            interface for enhanced financial intelligence.
          </p>
          <div className="sub-btn-frame">
            <button>Figma</button>
            <button>Ux</button>
          </div>
        </div>
        <div className="primary-active-btn">View Case Study</div>
      </div>
      <img src={ellips} alt="" className="ellips_image" />
    </div>
  );
}
