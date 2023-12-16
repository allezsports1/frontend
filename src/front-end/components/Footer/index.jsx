import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
      <>
      <div className='upper-footer'>
          <div className='container'>

          </div>
      </div>
      <div className='bottom-footer'>
        <div className='container'>
          <div className='row'>
              <div className='col-6-xl left'><span>&copy; 2023 <strong className='color-white'>AllezSportz.</strong> All Rights Reserved.</span></div>
              <div className='col-6-xl text-right'><span className='color-white'>Privacy policy</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer