import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
  UPDATE_PRODUCT,
} from '../actions/types';

const initialState = {
  products: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
    case UPDATE_PRODUCT:
    case ADD_PRODUCT:
      return {
        ...state,
        products: payload,
        loading: false,
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
