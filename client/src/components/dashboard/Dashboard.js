import React from 'react';
import Arrivals from '../Arrivals';
import Trands from '../Trand';
import Spinner from '../layout/Spinner';
import Subscribe from '../Subscribe';
import Hero from '../Hero';

const Dashboard = () => {
  // const loading = true;
  const loading = false;
  return loading ? (
    <Spinner />
  ) : (
    <div className=''>
      <Hero />
      <Arrivals />
      <Trands />
      <Subscribe />
    </div>
  );
};

export default Dashboard;
