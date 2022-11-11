import React from 'react'
import Card from '../Cards/cards'
import { cardsData } from '../../data/cardsData'
import '../Programs/programs.css'

const programs = () => {
  return (
    <div className='Programs' id="programs">
    {/* header */}
      <div className='programs-header'>
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>To shape you</span>
      </div>
    {/* cards */}
    <div className="cards">
    {cardsData.map((item, i) => (
      <Card data={item} key={i}/>
    ))}
    </div>
    </div>
  )
}

export default programs
