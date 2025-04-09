import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <h1>Sagar Sunil</h1>
            <br />
            <p>Full-Stack Web Developer from India, passionate about building dynamic, scalable web applications.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">© 2024 Sagar Sunil. All rights reserved.</div>
        <div className="footer-bottom-right">
            {/* <p>Term of Services</p> */}
            {/* <p>Privacy Policy</p> */}
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
