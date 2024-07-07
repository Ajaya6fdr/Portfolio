import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-top'>
          <div className='footer-top-left'>
             <img src={footer_logo} />
             <p>I am a frontend devolper from USA with 10 years of experince i worked in Google , Microsoft , Tesla and many more MNC's</p>
          </div>
          <div className='footer-top-right'>
             <div className='footer-email-input'>
                <img src={user_icon}/>
                <input type='email' placeholder='Enter Your email'/>
             </div> 
             <div className='footer-subscribe'>Subscribe</div>
          </div>
       </div>
       <hr></hr>
       <div className='footer-bottom'>
          <p className='footer-bottom-left'>© 2023 Alex Bennett. All rights are reserved</p>
          <div className='footer-bottom-right'>
              <p>Term of Servises</p>
              <p>Privecy and Policy</p>
              <p>Connect With Me</p>
          </div>
       </div>
    </div>
  )
}

export default Footer