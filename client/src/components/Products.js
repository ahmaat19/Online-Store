import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts, updateProduct, deleteProduct } from '../actions/product';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EditIcon from '@material-ui/icons/Edit';
import Spinner from './layout/Spinner';
import ProductForm from './ProductForm';
import SearchIcon from '@material-ui/icons/Search';

const Products = ({
  auth: { isAuthenticated },
  product_obj: { products, loading },
  getProducts,
  deleteProduct,
}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const [search, setSearch] = useState('');

  return loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      <p className=' display-6 text-muted my-3 text-center'>PRODUCTS</p>
      {!loading && (
        <>
          {isAuthenticated && (
            <div className='text-center'>
              <button
                type='button'
                className='btn btn-outline-info'
                data-toggle='modal'
                data-target='#ProductFormModal'
              >
                <AddCircleIcon />
              </button>
            </div>
          )}
          <div className='input-group my-3'>
            <input
              type='text'
              name='search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='form-control shadow-none'
              placeholder='Seach by product name or product category'
            />
            <span className='input-group-text' id='basic-addon2'>
              <SearchIcon />
            </span>
          </div>
        </>
      )}

      <hr />

      {/* Modal */}

      <div
        className='modal fade'
        id='ProductFormModal'
        tabIndex='-1'
        aria-labelledby='ProductFormModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                type='button'
                className='btn-close'
                data-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              {' '}
              <ProductForm />
            </div>
          </div>
        </div>
      </div>
      <div className='row gy-4'>
        {products &&
          products.map(
            (product) =>
              (product.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ||
                product.category
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())) && (
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
                                <button
                                  onClick={() => deleteProduct(product._id)}
                                  className='btn btn-outline-danger btn-sm form-control ml-1'
                                >
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
              )
          )}
      </div>
    </div>
  );
};

Products.propTypes = {
  product_obj: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  updateProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product_obj: state.product,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getProducts,
  updateProduct,
  deleteProduct,
})(Products);
