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
  });

  const [imageSource, setImageSource] = useState('');
  const [filename, setFilename] = useState('Choose file...');

  const { name, category, description, stock, price, status } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChangeFile = (e) => {
    setImageSource(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(imageSource);
    // addProduct(formData)

    const formResultData = new FormData();
    formResultData.append('name', name);
    formResultData.append('category', category);
    formResultData.append('description', description);
    formResultData.append('stock', stock);
    formResultData.append('price', price);
    formResultData.append('status', status);
    formResultData.append('imageSource', imageSource);

    addProduct(formResultData);
  };

  return (
    <div>
      <div className='container'>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='row '>
            <p className=' display-6 text-muted my-3 text-center'>
              PRODUCT REGISTRATION
            </p>
            <hr />

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group '>
                <span className='input-group-text' id='basic-addon1'>
                  <FaceIcon />
                </span>
                <input
                  name='name'
                  value={name}
                  onChange={(e) => onChange(e)}
                  type='text'
                  className='form-control py-2 shadow-none '
                  placeholder='Enter product name'
                />
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group '>
                <span className='input-group-text' id='basic-addon1'>
                  <SupervisorAccountIcon />
                </span>
                <select
                  name='category'
                  value={category}
                  onChange={(e) => onChange(e)}
                  className='form-control py-2 shadow-none '
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
              <div className='input-group '>
                <span className='input-group-text' id='basic-addon1'>
                  <FaceIcon />
                </span>
                <input
                  name='stock'
                  value={stock}
                  onChange={(e) => onChange(e)}
                  type='number'
                  className='form-control py-2 shadow-none '
                  placeholder='Enter quantity'
                />
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group '>
                <span className='input-group-text' id='basic-addon1'>
                  <FaceIcon />
                </span>
                <input
                  name='price'
                  value={price}
                  onChange={(e) => onChange(e)}
                  type='number'
                  className='form-control py-2 shadow-none '
                  placeholder='Enter price'
                />
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group '>
                <span className='input-group-text' id='basic-addon1'>
                  <SupervisorAccountIcon />
                </span>
                <select
                  name='status'
                  value={status}
                  onChange={(e) => onChange(e)}
                  className='form-control py-2 shadow-none '
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
              <div className='input-group '>
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
                  className='form-control py-2 shadow-none '
                  placeholder='Enter description'
                />
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='form-file'>
                <input
                  type='file'
                  className='form-file-input py-2 shadow-none'
                  id='customFile'
                  onChange={(e) => onChangeFile(e)}
                />
                <label className='form-file-label' htmlFor='customFile'>
                  <span className='form-file-text'>{filename}</span>
                  <span className='form-file-button'>Browse</span>
                </label>
              </div>
            </div>

            <div className='col-lg-7 col-sm-12 mx-auto mb-3'>
              <div className='input-group mx-auto d-block text-right'>
                <button
                  type='submit'
                  className='btn-submit btn btn-primary  p-2 px-4'
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
