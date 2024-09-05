import React from 'react';
import Run from '../components/Run';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/movie.css';
import post from '../assets/moviee.jpg'; // Preload image
import videooo from '../assets/video1.mp4'; // Default video
import Coming from './Coming';
import ScrollToTop from '../components/ScrollToTop';
import Logoslider from '../components/Logoslider';

function Movies() {
  return (
    <div>
      <Header />
      <div className="video-container">
        <video className="hero-video" loop autoPlay muted poster={post}>
          <source src={videooo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Run />
      <Logoslider/>
      <ScrollToTop/>
      <Footer />
    </div>
  );
}

export default Movies;
