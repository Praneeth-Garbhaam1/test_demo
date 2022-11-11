import React from 'react'
import {plansData} from '../../data/plansData'
import whitetick from '../../assets/whiteTick.png'
import '../Plans/plans.css'

const plans = () => {
  return (
    <div className='plans-container'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
    {/* program header  */}
     <div className='programs-header' style={{gap: '2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>your journey</span>
        <span className='stroke-text'>now with us</span>
      </div>
      {/* plans-card */}
      <div className="plans">
       {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={whitetick} alt="whitetick"/>
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -{'>'} </span>
            </div>
            <button className="btn">Join now</button>
          </div>
       ))}
      </div>
    </div>
  )
}

export default plans
