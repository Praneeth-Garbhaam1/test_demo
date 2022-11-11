import React from 'react'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
import './footer.css'

const footer = () => {
  return (
    <div className="Footer-container">
      <div className='footer' id='footer'>
        <div>
          <img src={github} alt="github" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
    </div>
    <div className="blur blur-f-1"></div>
    <div className="blur blur-f-1"></div>
    </div>
  )
}

export default footer
