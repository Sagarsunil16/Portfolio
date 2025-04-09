import React from 'react'
import './Hero.css'
import profile from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="profile-img"/>
      <h1><span>Hello, I'm Sagar Sunil</span>, a MERN Stack Developer based in India.</h1>
<p>I specialize in building dynamic, responsive web applications using modern technologies like MongoDB, Express.js, React.js, and Node.js. With a passion for clean code and efficient design, I am committed to delivering exceptional digital solutions for businesses and individuals alike.</p>

      <div className="hero-action">
      
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me </AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
