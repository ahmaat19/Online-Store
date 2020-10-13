import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../actions/product';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import Spinner from './layout/Spinner';

const Collections = ({ getProducts, product_obj: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      <p className=' display-6 text-muted mt-5 text-center'> PRODUCTS </p>

      <div className='row gy-4'>
        {products &&
          products.map((product) => {
            return (
              <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                <div
                  id={`_${product._id}`}
                  className='carousel slide'
                  data-ride='carousel'
                >
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
                    href={`#_${product._id}`}
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
                    href={`#_${product._id}`}
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
                        startIcon={<ShoppingCartIcon />}
                        color='secondary'
                      >
                        BUY
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
      </div>
    </div>
  );
};

Collections.propTypes = {
  product_obj: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  product_obj: state.product,
});

export default connect(mapStateToProps, { getProducts })(Collections);
