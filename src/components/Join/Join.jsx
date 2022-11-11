import React from 'react'
import '../Join/Join.css'

const Join = () => {
  return (
    <div className='Join' id="join-us">
      <div className="left-j">
      <hr/>
        <div>
            <span className='stroke-text'>Ready to</span>
            <span> Level up</span>
        </div>
        <div>
            <span> your body</span>
            <span className='stroke-text'> with us?</span>
        </div>
      </div>
      <div className="right-j">
        <span><input type="email" placeholder='Enter your Email Address here'/></span>
        <span><button type="button" className='btn btn-j'>Join now</button></span>
      </div>
    </div>
  )
}

export default Join
