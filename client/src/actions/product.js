import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from './types';

// Get products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/product');
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create product
export const addProduct = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const res = await axios.post('/api/product', formData, config);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });

    dispatch(setAlert('Successfully Added Product', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update product
export const updateProduct = (formData) => async (dispatch) => {
  const id = formData._id;
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const res = await axios.put(`/api/product/${id}`, formData, config);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data,
    });

    dispatch(setAlert('Successfully Updated Product', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete product by id
export const deleteProduct = (id) => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      const res = await axios.delete(`/api/product/${id}`);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: res.data,
      });
      dispatch(setAlert('Successfully Deleted Product', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
    }
  }
};
