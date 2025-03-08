import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
     <div className='footer-container'>
        <div className='footer-section'>
            <h4>Support</h4>
            <ul>
                <li>Help Center</li>
                <li>Safety information</li>
                <li>Our COVID-19 Response</li>
                <li>Supporting people with disabilities</li>
                <li>Report a neighborhood concern</li>
                <li>Help Center</li>
            </ul>

        </div>
        <div className='footer-section'>
        <h4>Community</h4>
            <ul>
                <li>Airbnb.org: disaster relief housing</li>
                <li>Support: Afghan refugees</li>
                <li>Celebrating diversity & belonging</li>
                <li>Combating discrimination</li>
            </ul>
        </div>
        <div className='footer-section'>
        <h4>Hosting</h4>
            <ul>
                <li>Try hosting</li>
                <li>AirCover: protection for Hosts</li>
                <li>Explore hosting resources</li>
                <li>Visit our community forum</li>
                <li>How to host responsibly</li>
            </ul>

        </div>
        <div className='footer-section'>
        <h4>About</h4>
            <ul>
                <li>Newsroom</li>
                <li>Learn about new features</li>
                <li>Letter from our founders</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Airbnb Luxe</li>
            </ul>

        </div>

    </div>
    <div className='bottom-footer'>

    </div>

    </div>
    
  )
}

export default Footer