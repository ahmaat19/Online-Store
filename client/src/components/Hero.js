import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) => {
  return (
    <div id='top-slide' class='carousel slide' data-ride='carousel'>
      <ol class='carousel-indicators'>
        <li data-target='#top-slide' data-slide-to='0' class='active'></li>
        <li data-target='#top-slide' data-slide-to='1'></li>
        <li data-target='#top-slide' data-slide-to='2'></li>
      </ol>
      <div class='carousel-inner'>
        <div class='carousel-item active'>
          <img
            src='https://img.freepik.com/free-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg?size=626&ext=jpg'
            class='d-block w-100'
            alt='...'
          />
          <div class='carousel-caption d-none d-md-block'>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class='carousel-item'>
          <img
            src='https://www.expatica.com/app/uploads/sites/11/2014/05/Shopping.jpg'
            class='d-block w-100'
            alt='...'
          />
          <div class='carousel-caption d-none d-md-block'>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class='carousel-item'>
          <img
            src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1138257321%2F960x0.jpg%3Ffit%3Dscale'
            class='d-block w-100'
            alt='...'
          />
          <div class='carousel-caption d-none d-md-block'>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <a
        class='carousel-control-prev'
        href='#top-slide'
        role='button'
        data-slide='prev'
      >
        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
        <span class='visually-hidden'>Previous</span>
      </a>
      <a
        class='carousel-control-next'
        href='#top-slide'
        role='button'
        data-slide='next'
      >
        <span class='carousel-control-next-icon' aria-hidden='true'></span>
        <span class='visually-hidden'>Next</span>
      </a>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
