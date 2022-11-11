import React from 'react'
import right from '../../assets/rightArrow.png'
import '../Cards/cards.css'

const cards = (props) => {
  return (
    <div className='card-content'>
        {props.data.icon}
        <h4>{props.data.name}</h4>
        <span>{props.data.features[0]}</span>
        <div className="join-now">
          <span>Join now</span>
          <img src={right} alt="card"/>
        </div>
    </div>
  )
}

export default cards
