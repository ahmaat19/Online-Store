import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../actions/product';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EditIcon from '@material-ui/icons/Edit';
import Spinner from './layout/Spinner';

const Collections = ({
  auth: { isAuthenticated },
  getProducts,
  product_obj: { products, loading },
}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      <p className=' display-6 text-muted my-3 text-center'>PRODUCTS</p>
      <hr />
      <div className='row gy-4'>
        {products &&
          products.map((product) => {
            return (
              <div
                key={product._id}
                className='col-lg-3 col-md-4 col-sm-6 col-12'
              >
                <div className='card border-0 shadow'>
                  <div className='inner-card-img'>
                    <img
                      src={product.imageSource.filePath}
                      className='card-img-top'
                      alt='...'
                    />
                  </div>

                  <div className='card-body text-center'>
                    <h6 className='text-muted category-title text-uppercase'>
                      {product.category}
                    </h6>
                    <Link
                      to={`/product-details/${product._id}`}
                      className='link-title'
                    >
                      <strong className='card-title text-muted'>
                        {product.name}
                      </strong>
                    </Link>
                    <p className='card-text'>
                      <img
                        src='https://emdoesbookreviews.files.wordpress.com/2014/12/five-stars.png'
                        alt=''
                        className='rate-stars'
                      />
                    </p>

                    <h5 className='price text-info'>
                      ${product.price}
                      <span className='text-muted sub-price'>/price</span>
                    </h5>
                    <button className='btn btn-info btn-sm form-control'>
                      <AddShoppingCartIcon />
                      ORDER
                    </button>
                    {!loading && (
                      <>
                        {isAuthenticated && (
                          <>
                            <div className='action-admin-btn mt-1'>
                              <button className='btn btn-outline-success btn-sm form-control mr-1'>
                                <EditIcon fontSize='small' />
                              </button>
                              <button className='btn btn-outline-danger btn-sm form-control ml-1'>
                                <DeleteIcon fontSize='small' />
                              </button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
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
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product_obj: state.product,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProducts })(Collections);
