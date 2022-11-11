import React from 'react';
import Header from './Header/header';
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png'
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
import './hero.css';

const hero = () => {

  const transition = {type:'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className = "hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className='left-h'>
        <Header/>

        {/* the-best-ad */}
        <div className='the-best-ad'>
          <motion.div
            initial={{left:mobile ? "176px" : "238px"}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heaading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' prefix="+"/>
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={900} delay='4' prefix="+"/></span>
            <span>Members Joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={40} delay='4' prefix="+"/></span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div 
        initial={{ right: "-1rem"}}
        whileInView={{ right: "4rem" }}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="heart"/>
          <span>Heart Rate</span>
          <span>116bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img src={hero_image} alt="hero_image" className='hero-image'/>
        <motion.img 
                initial={{ right: "11rem"}}
                whileInView={{ right: "20rem" }}
                transition={transition}
        src={hero_image_back} alt="hero_image" className='hero-image-back'/>

        {/* calories */}
        <motion.div
        initial={{ right: "37rem" }}
        whileInView={{ right: "28rem" }}
        transition={transition}
         className="calories">
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories burned</span><span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default hero
