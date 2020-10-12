import React from 'react';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import HeadsetIcon from '@material-ui/icons/Headset';

const Delivery = () => {
  return (
    <div>
      <div className='container my-5 text-center'>
        <div className='row no-gutters gy-4'>
          <div className='col-lg-4'>
            <DriveEtaIcon fontSize='large' className='deliveryIcon' />
            <h6 className='mt-3'>FREE SHIPPING, RETURN</h6>
            <p>Free Shipping On All US Orders</p>
          </div>
          <div className='col-lg-4 border-right border-left'>
            <LocalAtmIcon fontSize='large' className='deliveryIcon' />
            <h6 className='mt-3'>MONEY BACK GUARANTEE</h6>
            <p>30 Days Money Back Guarantee</p>
          </div>
          <div className='col-lg-4'>
            <HeadsetIcon fontSize='large' className='deliveryIcon' />
            <h6 className='mt-3'>1-800-333-44-55</h6>
            <p>24/7 Days Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
