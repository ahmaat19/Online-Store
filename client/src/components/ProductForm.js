import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/product';
import PropTypes from 'prop-types';

// Material UI Icons
import FaceIcon from '@material-ui/icons/Face';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const ProductForm = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    stock: '',
    price: '',
    status: '',
    imageSource: '',
  });

  const {
    name,
    category,
    description,
    stock,
    price,
    status,
    imageSource,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // Redirect if logged in
  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <div>
      <div className='container__body'>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='row'>
            <h3 className='text-center form-title mb-4'>Add Product</h3>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group shadow'>
                <span className='input-group-text' id='basic-addon1'>
                  <FaceIcon />
                </span>
                <input
                  name='name'
                  value={name}
                  onChange={(e) => onChange(e)}
                  type='text'
                  className='form-control py-2'
                  placeholder='Enter product name'
                />
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group shadow'>
                <span className='input-group-text' id='basic-addon1'>
                  <SupervisorAccountIcon />
                </span>
                <select
                  name='category'
                  value={category}
                  onChange={(e) => onChange(e)}
                  className='form-control py-2'
                >
                  <option value='' disabled>
                    Category...
                  </option>
                  <option value='Mobile'>Mobile</option>
                  <option value='Laptop'>Laptop</option>
                </select>
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group shadow'>
                <span className='input-group-text' id='basic-addon1'>
                  <FaceIcon />
                </span>
                <input
                  name='stock'
                  value={stock}
                  onChange={(e) => onChange(e)}
                  type='number'
                  className='form-control py-2'
                  placeholder='Enter quantity'
                />
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group shadow'>
                <span className='input-group-text' id='basic-addon1'>
                  <FaceIcon />
                </span>
                <input
                  name='price'
                  value={price}
                  onChange={(e) => onChange(e)}
                  type='number'
                  className='form-control py-2'
                  placeholder='Enter price'
                />
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group shadow'>
                <span className='input-group-text' id='basic-addon1'>
                  <FaceIcon />
                </span>
                <textarea
                  rows='5'
                  cols='30'
                  name='description'
                  value={description}
                  onChange={(e) => onChange(e)}
                  type='number'
                  className='form-control py-2'
                  placeholder='Enter description'
                />
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group shadow'>
                <span className='input-group-text' id='basic-addon1'>
                  <SupervisorAccountIcon />
                </span>
                <select
                  name='status'
                  value={status}
                  onChange={(e) => onChange(e)}
                  className='form-control py-2'
                >
                  <option value='' disabled>
                    Status...
                  </option>
                  <option value='Active'>Active</option>
                  <option value='No Active'>No Active</option>
                </select>
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group shadow'>
                <span className='input-group-text' id='basic-addon1'>
                  <FaceIcon />
                </span>
                <input
                  name='imageSource'
                  value={imageSource}
                  onChange={(e) => onChange(e)}
                  type='number'
                  className='form-control py-2'
                  placeholder='Enter imageSource'
                />
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group mx-auto d-block text-right'>
                <button
                  type='submit'
                  className='btn-submit btn btn-primary shadow p-2 px-4'
                >
                  CREATE
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

ProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default connect(null, { addProduct })(ProductForm);
