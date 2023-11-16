// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-bottom-area" style={{ marginTop: '20px', paddingRight: '80px', paddingLeft: '80px',paddingBottom: '50px', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div className="fba-copyright">
            <h1 style={{
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}>OCMIS 2023</h1>
          </div>
        </div>
        <div>
          <div className="fba-links" style={{ textAlign: 'right' }}>
            <h1 style={{
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}>CONTACT US</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
