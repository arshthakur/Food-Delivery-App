import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = ()=>{
  return(
    <div className='footer' id='footer'>
      <div className="footer-content">
        
        <div className="footer-content-left">
          <img className="logo_img" src={assets.logo} alt="" />
          <p>"Welcome to Nibble, your go-to destination for delicious food delivered straight to your door. For any questions or assistance, reach out to our friendly support team at nibble@gmail.com or +91-564-827-6383. Connect with us on social media @nibble for the latest updates and promotions. Your satisfaction is our priority.</p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>

        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91-564-827-6383</li>
            <li>nibble@gmail.com</li>
          </ul>

        </div>
      </div>
        <hr></hr>
        <p className='footer-copyright'>Copyright 2024 @ nibble.com - All Right Reserved.</p>
    </div>
  );
}

export default Footer;