import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__container">
            <div className="footer__list">
                <div className="footer__list-item">
                    <Link to='/'>Countries</Link>
                    <Link to='/'>Regions</Link>
                    <Link to='/'>Cities</Link>
                    <Link to='/'>Airports</Link>
                    <Link to='/'>Hotels</Link>
                </div>
                <div className="footer__list-item">
                    <Link to='/'>Homes</Link>
                    <Link to='/'>Apartments</Link>
                    <Link to='/'>Ressorts</Link>
                    <Link to='/'>Villas</Link>
                    <Link to='/'>Hotels</Link>
                </div>
                <div className="footer__list-item">
                    <Link to='/'>All destinations</Link>
                    <Link to='/'>Discovers</Link>
                    <Link to='/'>Reviews</Link>
                    <Link to='/'>Seasonal and holiday deals</Link>
                </div>
                <div className="footer__list-item">
                    <Link to='/'>Car rental</Link>
                    <Link to='/'>Flight Finder</Link>
                    <Link to='/'>Restauranr reservations</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Terms & consitions</Link>
                </div>
            </div>
            <div className="footer__bottom">
                <span>
                    Made with by Thanh Tien @2022
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer