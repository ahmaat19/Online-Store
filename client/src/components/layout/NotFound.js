import React from 'react';

const NotFound = () => {
  return (
    <div>
      <div className='text-danger text-center mt-5 '>
        <h1 class='text-center spinner-border'></h1>
      </div>
      <h1 class='x-large text-danger text-center  display-1'>Page Not Found</h1>
      <p className='text-center text-muted'>Sorry, this page does not exist</p>
    </div>
  );
};

export default NotFound;
