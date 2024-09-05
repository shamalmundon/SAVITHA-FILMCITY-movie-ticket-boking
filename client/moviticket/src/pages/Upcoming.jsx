import React from 'react';
import Upc from '../components/Upc';
import org from '../assets/org.mp4';
import '../assets/videoo.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import poster from '../assets/poster.jpg';
import Coming from './Coming';
import ScrollToTop from '../components/ScrollToTop';

function Upcoming() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Header />
      <ScrollToTop />
      <video
        className="responsive-video" // Add this class for responsive styling
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster={poster}
      >
        <source src={org} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Upc />
      <div>
        <Coming />
      </div>
      <Footer />
    </div>
  );
}

export default Upcoming;
