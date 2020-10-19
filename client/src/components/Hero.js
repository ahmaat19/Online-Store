import React from 'react';
// import PropTypes from 'prop-types';

const Hero = (props) => {
  return (
    <div id='' className='carousel slide' data-ride='carousel'>
      <ol className='carousel-indicators'>
        <li data-target='' data-slide-to='0' className='active'></li>
        <li data-target='' data-slide-to='1'></li>
        <li data-target='' data-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src='https://img.freepik.com/free-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg?size=626&ext=jpg'
            className='d-block w-100'
            alt='...'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            src='https://www.expatica.com/app/uploads/sites/11/2014/05/Shopping.jpg'
            className='d-block w-100'
            alt='...'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1138257321%2F960x0.jpg%3Ffit%3Dscale'
            className='d-block w-100'
            alt='...'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href=''
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href=''
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </a>
    </div>
  );
};

// Hero.propTypes = {};

export default Hero;
