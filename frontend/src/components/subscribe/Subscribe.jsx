import React from 'react'
import './subscribe.css'
const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribe_container">
            <h1>SAVE TIME, SAVE MONEY!</h1>
            <span>Sign up and we'll send the best deals to you</span>
            <form action="" className='email' id='email'>
                <input type="text"  placeholder='Your email' className='input__subscribe' />
                <button className='btn btn__subscribe'>SUBSCRIBE</button>
            </form>
        </div>
    </div>
  )
}

export default Subscribe