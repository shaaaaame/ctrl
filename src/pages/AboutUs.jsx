import React from 'react'

function AboutUs() {
  return (
    <div className='about_us page'>
        <video id='about_us' src={require('../images/about_us-tv.mp4')} type='video/mp4' className='about_us-video horizontal-center vertical-center' autoPlay loop muted playsInline/>
        <p></p>
    </div>
  )
}

export default AboutUs