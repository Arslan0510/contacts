import React from 'react';

const index = ({ history }) => {
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <h1>Welcome to my Challenge</h1>
      <button
        className='btn btn-primary'
        onClick={() => history.push('/contacts')}
      >
        Click to add Contact
      </button>
    </div>
  );
};

export default index;
