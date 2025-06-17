import React, { useEffect, useState } from 'react'
import commonGetApi from '../server/Api';
import { Image } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import text2 from '../assets/images/text2.png';
import text1 from '../assets/images/text1.png';
import doradesign from '../assets/images/doradesign.png';
import wavefun from '../assets/images/wavefun.png';
import silla from '../assets/images/silla.png';
import ellips from '../assets/images/Ellipse.png';
import menue from '../assets/images/menue.png';
import work1 from '../assets/images/workImage.png';
import { ExpertiseBox, SubHeader, WorkCard } from '../components';
const Expertise =["Branding", "Web Design", "UI/UX Design","Graphic Design"];
const workImages = ['Analysis Application', 'Fortknox Application', 'Zenocide Application'];
export default function Home() {

  return (
    <div className='main-home bg-dark'>
    <header className='main-home-header'>
      <div className="container">
        <div className="header-content-wrapper">
          <Image src={logo} alt='logo' className='logo' />
          <input type="checkbox" name="" id="so" />
          <ul className='navbar'>
            <li className="list"><button className='primary-active-btn active'>Home</button></li>
            <li className="list"><button className=''>About</button></li>
            <li className="list"><button className=''>Projects</button></li>
            <li className="list"><button className=''>Contact</button></li>
          </ul>
          <div className="d-flex align-items-center gap-2">
          <button className='ghost-btn'>HIRE ME</button>
          <label htmlFor="so">
             <img src={menue} alt="" className='menue_icon' />
          </label>
          </div>
        </div>
      </div>
    </header>
        <section className='hero-section'>
          <div className="container">
            <h1 className='hero-text'>I AM A<img src={text1} className='text1_img'/>FREELANCE DESIGNER<img src={text2} alt='imge' className='text2_img' />from San Francisco</h1>
            <div className="sub-hero-text">
              <div className="feature_us">
                <img src={doradesign} className='feat-logo' alt="logo" />
                <img src={wavefun} className='feat-logo' alt="logo" />
                <img src={silla} className='feat-logo' alt="logo" />
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est magnam placeat id quae maxime quisquam sapiente fugit delectus optio! Qui autem veritatis mollitia quas minus ratione quam dicta dolore blanditiis?</p>
            </div>
          </div>
        </section>

        <section className='expertise-section'>
          <div className="container">
            <SubHeader title="Expertise" />
            <div className="expertise_box-frae">
              {Expertise.map((item, index) => {
                return(
                  <ExpertiseBox key={index} title={item} />
                )
              })}
            </div>
          </div>
        </section>


        <section className='work-section'>
          <div className="container">
            <SubHeader title="Work" viewAll={true} />
            <div className="word_box-frae">
              {workImages?.map((item, index) => {
                console.log('item', item);
                console.log('index', index);
                return(
                  <WorkCard key={index} index={index} title={item} />
                )
              })}

            </div>
          </div>
        </section>
    </div>

  )
}
