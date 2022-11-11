import React from 'react'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import Nb from '../../assets/nb.png'
import Nike from '../../assets/nike.png'
import adidas from '../../assets/adidas.png'
import tick from '../../assets/tick.png'
import '../Reasons/reasons.css'

const reasons = () => {
  return (
    <div className='Reasons' id="reasons">
      <div className="left-r">
        <img src={Image1} alt="dum_tall" />
        <img src={Image2} alt="dum_exe" />
        <img src={Image3} alt="dum_exe3" />
        <img src={Image4} alt="dum_exe2" />
      </div>
      <div className="right-r">
        <span><b>some reasons</b></span>
        <div>
          <span className='stroke-text'>why</span>
          <span>choose us?</span>
        </div>
        <div className='details-r'>
          <div>
            <img src={tick} alt="tick" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{
          color:'var(--gray)',
          fontWeight: "normal",
        }}>OUR PARTNERS</span>
        <div className="partners">
          <img src={Nb} alt="nb" />
          <img src={Nike} alt="nike" />
          <img src={adidas} alt="adidas" />
        </div>
      </div>
    </div>
  )
}

export default reasons
