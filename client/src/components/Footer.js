import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div className='p-5 mt-5 bg-gradient footer'>
      <div className='container'>
        <div className='row '>
          <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <h4 className='widget-title'>CATEGORIES</h4>
            <ul className=''>
              <li className='nav-item'>
                <Link to='/collection-full'>Women</Link>
              </li>

              <li className='nav-item'>
                <Link to='/collection-full'>Shoes</Link>
              </li>
            </ul>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <h4 className='widget-title'>OUR POLICY</h4>
            <ul className='stone-go-top'>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>

              <li>
                <Link to='/collection-full'>Shop</Link>
              </li>
            </ul>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <h4 className='widget-title'>GET IN TOUCH</h4>
            <ul className='contact_info_list'>
              <li className='single-info-item'>
                <div className='icon'>
                  <i className='icon-home-foother' />
                </div>
                <div className='details'>
                  <span>
                    Davis Patrick
                    <br />
                    P.O. Box 147 2546 Sociosqu Rd. <br />
                    Bethlehem Utah 02913
                  </span>
                </div>
              </li>
              <li className='single-info-item'>
                <div className='icon'>
                  <i className='icon-email-subscribe' />
                </div>
                <div className='details'>support@example.com</div>
              </li>
              <li className='single-info-item'>
                <div className='icon'>
                  <i className='icon-call-footer' />
                </div>
                <div className='details'>
                  <a href='tel:+496170961709'>(939) 353-1107, (302) 259-2375</a>
                </div>
              </li>
            </ul>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <h4 className='widget-title'>FOLLOW US</h4>
            <ul>
              <li>
                <a href='https://www.facebook.com/codingeek'>
                  <i className='icon-facebook' /> Facebook
                </a>
              </li>
              <li>
                <a href='https://www.twitter.com/codingeek'>
                  <i className='icon-twitter' /> Twitter
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/codingeek'>
                  <i className='icon-instagram' /> Instagram
                </a>
              </li>
              <li>
                <a href='https://www.pinterest.com/codingeek'>
                  <i className='icon-pinterest' /> Pinterest
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/codingeek'>
                  <i className='icon-youtube' /> Youtube
                </a>
              </li>
              <li>
                <a href='https://www.skype.com/codingeek'>
                  <i className='icon-skype' /> Skype
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer.propTypes = {};

export default Footer;
