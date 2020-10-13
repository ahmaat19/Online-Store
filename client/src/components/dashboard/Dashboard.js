import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Arrivals from '../Arrivals';
import Trands from '../Trand';
import Spinner from '../layout/Spinner';
import Subscribe from '../Subscribe';
import Hero from '../Hero';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product';

const Dashboard = ({ getProducts, product_obj: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // const loading = true;

  return loading ? (
    <Spinner />
  ) : (
    <div className=''>
      <Hero />
      <Arrivals products={products} />
      {/* <Trands products={products} /> */}
      <Subscribe />
    </div>
  );
};

Dashboard.propTypes = {
  product_obj: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  product_obj: state.product,
});

export default connect(mapStateToProps, { getProducts })(Dashboard);
