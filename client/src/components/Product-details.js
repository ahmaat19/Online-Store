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
      <div className='row my-5 gy-5'>
        {products &&
          products.map((product) => {
            if (product._id === match.params.id) {
              return (
                <>
                  <div
                    className='col-lg-4 col-md-6 col-sm-6 col-12'
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

                  <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                    <h3 className='product-title'>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className='content-price d-flex px-5 align-self-stretch justify-content-center'>
                      <ButtonGroup>
                        <a href='tel:+496170961709'>
                          <Button variant='contained' color='primary'>
                            ${product.price}
                          </Button>
                        </a>
                        <a href={`tel:*712*615301507*${product.price}###`}>
                          <Button
                            variant='contained'
                            startIcon={<ShoppingCartIcon />}
                            color='secondary'
                          >
                            BUY NOW
                          </Button>
                        </a>
                      </ButtonGroup>
                    </div>
                  </div>
                </>
              );
            }
          })}
      </div>
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
