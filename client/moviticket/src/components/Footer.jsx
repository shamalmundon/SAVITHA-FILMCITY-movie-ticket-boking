import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '1rem 0', textAlign: 'center' }}>
      <div style={{ borderTop: '1px solid white', marginBottom: '3rem' }}></div>
      
      <div>
        <Link as={Link} to="/Privacy" style={{ color: 'white', marginRight: '2rem', textDecoration: 'none' }}>
          Privacy Policy
        </Link>
        <Link as={Link} to="/Terms" style={{ color: 'white', textDecoration: 'none',marginRight: '2rem' }}>
          Terms Of Service
        </Link>
        <Link as={Link} to="/Refund" style={{ color: 'white', textDecoration: 'none' ,marginRight: '2rem' }}>
          Refund Policy
        </Link>
        <Link as={Link} to="/Contact" style={{ color: 'white', textDecoration: 'none', marginRight: '2rem' }}>
          Contact Us
        </Link>
      </div>

    <div style={{ marginTop: '1rem' }}>
        <h8 style={{ fontSize: '0.8rem' }}>SAVITHA &copy; All Rights By Shamal</h8>
    </div>
    </footer>
  );
}

export default Footer;
