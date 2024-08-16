import React from 'react'
import './Footer.css'
import yt_icon from '../../assets/youtube_icon.png'
import ig_icon from '../../assets/instagram_icon.png'
import fb_icon from '../../assets/facebook_icon.png'
import twt_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={fb_icon} alt="fb-icon" />
        <img src={ig_icon} alt="ig-icon" />
        <img src={twt_icon} alt="twt-icon" />
        <img src={yt_icon} alt="yt-icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@ 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer