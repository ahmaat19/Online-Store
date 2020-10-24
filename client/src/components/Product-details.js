import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Spinner from './layout/Spinner';
import { connect } from 'react-redux';
import { getProducts } from '../actions/product';

const ProductDetails = ({
  getProducts,
  product_obj: { products, loading },
  match,
}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      <div className='row '>
        <p className=' display-6 text-muted my-3 text-center'>
          PRODUCT DETAILS <hr />
        </p>
        {products &&
          products.map(
            (product) =>
              product._id === match.params.id && (
                <>
                  <div
                    className='col-lg-5 col-md-6 col-sm-6 col-12 mx-auto my-auto'
                    key={product._id}
                  >
                    <div className=''>
                      <img
                        src={product.imageSource.filePath}
                        className='d-block w-100'
                        alt='...'
                      />
                    </div>
                  </div>

                  <div className='col-lg-5 col-md-6 col-sm-6 col-12 mx-auto my-auto'>
                    <p className=' border d-inline-block px-5 py-2 text-info'>
                      {product.category}
                    </p>
                    <p className='border font-weight-bolder d-inline-block px-5 py-2 text-info'>
                      ${product.price}
                    </p>
                    <p className='card-title display-6 text-muted'>
                      {product.name}
                    </p>

                    <p className='text-muted'>{product.description}</p>
                    <div className='content-price d-flex px-5 align-self-stretch justify-content-center'>
                      <a
                        href={`tel:*712*615301507*${product.price}#`}
                        className='buy-btn'
                      >
                        <Button
                          variant='contained'
                          startIcon={<ShoppingCartIcon />}
                          color='inherit'
                        >
                          BUY NOW
                        </Button>
                      </a>
                    </div>
                  </div>
                </>
              )
          )}
      </div>

      {/* <div class='row'>
        <div className='col-lg-6 col-md-6 col-sm-6 col-12 mx-auto'>
          <div class='card mb-3' style={{ maxWidth: '540px' }}>
            <div class='row g-0'>
              <div class='col-md-4'>
                <img
                  className='card-img w-100'
                  src='http://localhost:3000/uploads/16035311681258.JPG'
                  alt='...'
                />
              </div>
              <div class='col-md-8'>
                <div class='card-body'>
                  <h5 class='card-title text-muted'>Compaq Latest Laptop</h5>
                  <p class='card-text text-muted'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class='card-text'>
                    <small class='text-muted'>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

ProductDetails.propTypes = {
  product_obj: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product_obj: state.product,
});

export default connect(mapStateToProps, { getProducts })(ProductDetails);
