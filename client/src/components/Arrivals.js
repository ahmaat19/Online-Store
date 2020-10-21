import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';

const Arrivals = ({ products }) => {
  return (
    <div className='container'>
      <p className=' display-6 text-muted mt-5 text-center'> NEW ARRIVAL</p>

      <div className='row gy-4'>
        {products &&
          products.map((product) => {
            return (
              <div
                className='col-lg-4 col-md-6 col-sm-6 col-12'
                key={product._id}
              >
                <div className='carousel slide' data-ride='carousel'>
                  <div className='carousel-inner'>
                    <div className='carousel-item '>
                      <img
                        src={product.imageSource.filePath}
                        className='d-block w-100'
                        alt='...'
                      />
                    </div>
                    <div className='carousel-item active'>
                      <img
                        src={product.imageSource.filePath}
                        className='d-block w-100'
                        alt='...'
                      />
                    </div>
                  </div>

                  <a
                    className='carousel-control-prev'
                    href=''
                    role='button'
                    data-slide='prev'
                  >
                    <span
                      className='carousel-control-prev-icon'
                      aria-hidden='true'
                    ></span>
                    <span className='visually-hidden'></span>
                  </a>

                  <a
                    className='carousel-control-next'
                    href=''
                    role='button'
                    data-slide='next'
                  >
                    <span
                      className='carousel-control-next-icon'
                      aria-hidden='true'
                    ></span>
                    <span className='visually-hidden'></span>
                  </a>
                </div>
                <h6 className='pt-3 text-center'>{product.name}</h6>
                <div className='content-price d-flex px-5 align-self-stretch justify-content-center'>
                  <ButtonGroup>
                    <Link to={`product-details/${product._id}`}>
                      <Button variant='contained' color='primary'>
                        ${product.price}
                      </Button>
                    </Link>

                    <Link to={`product-details/${product._id}`}>
                      <Button
                        variant='contained'
                        startIcon={<InfoIcon />}
                        color='secondary'
                      >
                        DETAILS
                      </Button>
                    </Link>
                  </ButtonGroup>
                </div>
              </div>
            );
          })}

        <Link to='/collection' className='text-center py-2 my-4 text-uppercase'>
          <Button variant='contained' color='primary' disableElevation>
            View More +
          </Button>
        </Link>
      </div>
    </div>
  );
};

Arrivals.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Arrivals;
