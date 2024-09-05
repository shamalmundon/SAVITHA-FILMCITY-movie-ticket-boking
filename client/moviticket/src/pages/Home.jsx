import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel } from 'react-bootstrap';

import '../assets/Home.css';
import Upc from '../components/Upc';
import Run from '../components/Run';
import Logoslider from '../components/Logoslider';
import Coming from './Coming';
import ScrollToTop from '../components/ScrollToTop';


function Home() {
  return (
    <div>
      <Header />
      <div>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img
            style={{ height: '95vh', width: '100%', objectFit: 'cover' }}
            className="d-block w-100"
            src="https://i.ytimg.com/vi/GoqNN6fA9c8/maxresdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='det'>
            <h3 id='tit'>O Kadhal Kanmani</h3>
            <p style={{ fontWeight: 'bold' }}>Drama . Music . Romance</p>
            <p style={{ fontWeight: 'bold' }}>Trailer</p>
            <a id='play' href="https://youtu.be/GoqNN6fA9c8?si=6DHAZjWOxrcoW7O3" className="btn btn-light">
              <i className="fas fa-play fa-2x"></i> <span style={{ fontSize: '25px', fontWeight: 'bold' }}>PLAY</span>
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '95vh', width: '100%', objectFit: 'cover' }}
            className="d-block w-100"
            src="https://i.ytimg.com/vi/-KfsY-qwBS0/maxresdefault.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className='det'>
            <h3 id='tit'>K.G.F: Chapter 1</h3>
            <p style={{ fontWeight: 'bold' }}>Action . Thriller</p>
            <p style={{ fontWeight: 'bold' }}>Trailer</p>
            <a id='play' href="https://youtu.be/yMowzmpbe3g?autoplay=1" className="btn btn-light">
              <i className="fas fa-play fa-2x"></i> <span style={{ fontSize: '25px', fontWeight: 'bold' }}>PLAY</span>
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '95vh', width: '100%', objectFit: 'cover' }}
            className="d-block w-100"
            src="https://i.ytimg.com/vi/ukuENFi8OuE/maxresdefault.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className='det'>
            <h3 id='tit'>Manichitrathazhu</h3>
            <p style={{ fontWeight: 'bold' }}>Horror . Comedy</p>
            <p style={{ fontWeight: 'bold' }}>Trailer</p>
            <a id='play' href="https://youtu.be/-KfsY-qwBS0?si=tWD0zUBQ151llcMg" className="btn btn-light">
              <i className="fas fa-play fa-2x"></i> <span style={{ fontSize: '25px', fontWeight: 'bold' }}>PLAY</span>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
      <div>
        <Logoslider/>
      </div>


      <section className='running' style={{ height: '100vh' }}>
       <Run/>
      </section>


      <section className='running' style={{ height: '120vh' }}>
        <Upc/>
      </section>
      <div style={{backgroundColor:'black'}}>
      <Coming/>
      </div>
      <ScrollToTop/>

      <Footer />
    </div>
  );
}

export default Home;
