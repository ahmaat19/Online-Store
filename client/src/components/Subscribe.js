import React from 'react';
// import PropTypes from 'prop-types';

const Subscribe = (props) => {
  return (
    <div className='my-3 p-5 bg-gradient bg-secondary text-light'>
      <h2 className='text-capitalize text-center'>KEEP CONNECTED</h2>

      <p className='text-center py-3'>
        Get updates by subscribe our weekly newsletter
      </p>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control bg-transparent text-light'
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
        />
        <span
          className='input-group-text bg-transparent text-light'
          id='basic-addon2'
        >
          @example.com
        </span>
      </div>
    </div>
  );
};

// Subscribe.propTypes = {};

export default Subscribe;
