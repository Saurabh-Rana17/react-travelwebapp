import React from 'react'

import { useNavigate } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';
import { MouseScroll } from './MouseScroll';

function HeroSection() {



  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/services';
    navigate(path);
  }


  return (
    <div id='hero' className='hero-container'>
      <img src={`images/uk-2-min.jpg`} alt="UK Travel" className='uk-hero'></img>

      <h1>UTTARAKHAND AWAITS</h1>
      <p> Your Gateway to Himalayan Adventures</p>
      <MouseScroll />
      {/* <form className='search'>
        <div className='search-container'>
          <label >Where are you going?</label>
          <input id='location' type='text' placeholder='Search your location' />
        </div>
        <div className='row-container'>

          <div className='search-container'>
            <label>Check in</label>
            <input id='check-in' type='date' />
          </div>
          <div className='search-container'>
            <label>Check out</label>
            <input id='check-out' type='date' />
          </div>

        </div>
        <div className='search-container'>
          <button
            className='hero-btn'
            type='submit'
            onClick={routeChange}
          >
            Explore
          </button>
        </div>
      </form> */}
    </div>
  )
}

export default HeroSection;