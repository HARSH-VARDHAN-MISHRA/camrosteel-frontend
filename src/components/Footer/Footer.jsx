import React from 'react'
import './Footer.css'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>

      <div className="side-icons">
        <div className="sin"><a href="https://www.instagram.com/camrosteel?igsh=NmtrZGY3Zms2b2N6" target="_blank" className="icon insta"><i className="fa-brands fa-instagram"></i></a></div>
        <div className="sin"><a href="https://www.facebook.com/CamroSteels?mibextid=ZbWKwL" target="_blank" className="icon facebook"><i className="fa-brands fa-square-facebook"></i></a></div>
        <div className="sin"><a href="https://youtube.com/@utensil_camrosteel?si=Gym2MWKq5WQLtGj8" target="_blank" className="icon youtube"><i className="fa-brands fa-youtube"></i></a></div>
        <div className="sin"><a href="https://api.whatsapp.com/send?phone=919560436691" target="_blank" className="icon whatsapp"><i className="fa-brands fa-whatsapp"></i></a></div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <div className="logo"><img loading="lazy" decoding="async" src={logo} alt="logo" /></div>
              <p>
                <strong>Address :</strong>
                <a to="">B-91 Rohini Phase 2 New Delhi-110084</a>
              </p>
              <p>
                <strong>Contact Us :</strong>
                <a href="tel:+918595722922 ">+91-8595722922</a>
              
              </p>
              <p>   <strong>Email :</strong>  <a href='mailto:camrocookerpvtltd@gmail.com'>camrocookerpvtltd @gmail.com</a></p>
              
            </div>
            <div className="col-md-3">
              <div className="head">Quick Links</div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Our Categories</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                
              </ul>
            </div>
            <div className="col-md-3">
              <div className="head">Follow us </div>
              <div className='flex mr-2'>
                <a target="_blank" href="https://www.instagram.com/camrosteel?igsh=NmtrZGY3Zms2b2N6" className="icon"><i className="fa-brands fa-instagram"></i></a>
                <a target="_blank" href="https://www.facebook.com/CamroSteels?mibextid=ZbWKwL" className="icon"><i className="fa-brands fa-square-facebook"></i></a>
                <a target="_blank" href="https://youtube.com/@utensil_camrosteel?si=Gym2MWKq5WQLtGj8" className="icon"><i className="fa-brands fa-youtube"></i></a>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=919560436691"  className="icon"><i className="fa-brands fa-whatsapp"></i></a>
              </div>

            </div>
            <div className="col-md-3">
              <div className="head">Policy</div>
              <ul>
                <li><Link to="/term-and-condition-policy">Terms & Condition</Link></li>
                <li><Link to="/shipping-policy">Shipping & Delivery</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/return-and-refund-policy">Return & Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-12 text-center py-2">
            <div className="copyright">
              <p>© 2024, CAMRO - <Link to="https://www.digiindiasolutions.com/" target="_blank">DIGI INDIA SOLUTIONS</Link></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer