import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const ProductDetails = (props) => {
  return (
    <div className='container'>
      <div className='row my-5 gy-5'>
        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
          <div className=''>
            <img
              src='https://cdn.pocket-lint.com/r/s/1200x/assets/images/120309-phones-buyer-s-guide-best-smartphones-2020-the-top-mobile-phones-available-to-buy-today-image1-eagx1ykift.jpg '
              className='d-block w-100'
              alt='...'
            />
          </div>
        </div>

        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
          <h3 className='product-title'>
            Faxon Canvas Low-Top Sneaker Inspired Slim Ankle Leg Jean
          </h3>
          <p>
            Faxon Canvas Low-Top Sneaker Inspired Slim Ankle Leg Jean Adding
            images to the .navbar-brand will likely always require custom styles
            or utilities to properly size. Here are some examples to
            demonstrate.
          </p>
          <div className='content-price d-flex px-5 align-self-stretch justify-content-center'>
            <ButtonGroup>
              <Button variant='contained' color='primary'>
                $450.00
              </Button>
              <Button
                variant='contained'
                startIcon={<ShoppingCartIcon />}
                color='secondary'
              >
                BUY NOW
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
