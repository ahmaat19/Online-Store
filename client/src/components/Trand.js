import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Trands = (props) => {
  return (
    <div className='container'>
      <p className=' display-6 text-muted mt-5 text-center'> TRANDING NOW</p>

      <div className='row gy-4'>
        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
          <div id='trands' className='carousel slide' data-ride='carousel'>
            <div className='carousel-inner'>
              <div className='carousel-item '>
                <img
                  src='http://codingeek.io/react/stoon/assets/img/tranding/1.png'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='carousel-item '>
                <img
                  src='http://codingeek.io/react/stoon/assets/img/tranding/4.png'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='carousel-item active'>
                <img
                  src='http://codingeek.io/react/stoon/assets/img/tranding/5.png'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
            </div>

            <a
              className='carousel-control-prev'
              href='#trands'
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
              href='#trands'
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
          <h6 className='pt-3 text-center'>Faxon Canvas Low-Top Sneaker</h6>
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

        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
          <div id='trands' className='carousel slide' data-ride='carousel'>
            <div className='carousel-inner'>
              <div className='carousel-item '>
                <img
                  src='http://codingeek.io/react/stoon/assets/img/tranding/1.png'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='carousel-item '>
                <img
                  src='http://codingeek.io/react/stoon/assets/img/tranding/4.png'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='carousel-item active'>
                <img
                  src='http://codingeek.io/react/stoon/assets/img/tranding/5.png'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
            </div>

            <a
              className='carousel-control-prev'
              href='#trands'
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
              href='#trands'
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
          <h6 className='pt-3 text-center'>Faxon Canvas Low-Top Sneaker</h6>
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

        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
          <div id='trands' className='carousel slide' data-ride='carousel'>
            <div className='carousel-inner'>
              <div className='carousel-item '>
                <img
                  src='http://codingeek.io/react/stoon/assets/img/tranding/1.png'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='carousel-item '>
                <img
                  src='http://codingeek.io/react/stoon/assets/img/tranding/4.png'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='carousel-item active'>
                <img
                  src='http://codingeek.io/react/stoon/assets/img/tranding/5.png'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
            </div>

            <a
              className='carousel-control-prev'
              href='#trands'
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
              href='#trands'
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
          <h6 className='pt-3 text-center'>Faxon Canvas Low-Top Sneaker</h6>
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

        <Link to='/collection' className='text-center py-2 my-4 text-uppercase'>
          <Button variant='contained' color='primary' disableElevation>
            View More +
          </Button>
        </Link>
      </div>
    </div>
  );
};

Trands.propTypes = {};

export default Trands;
