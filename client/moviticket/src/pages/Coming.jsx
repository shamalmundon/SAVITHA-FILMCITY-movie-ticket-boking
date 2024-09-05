import React from 'react';
import '../assets/coming.css';

const Coming = () => {
  return (
    <div className="coming">
      <h3 style={{fontWeight:'bold'}}>COMING SOON</h3>
      <div className="video-slider">
        <div className="video-slide-track">
          <iframe
            src="https://www.youtube.com/embed/jxCRlebiebw?si=lN1jQ0OdvXHango7"
            title="YouTube Video 1"
            className="video-frame"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/ru5Cku2t1JU?si=bGIPtW3iqmcogZ-X"
            title="YouTube Video 2"
            className="video-frame"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          
          <iframe
            src="https://www.youtube.com/embed/ajnCMSC4VPo?si=lhLLGnwdY0l1Ezrt"
            title="YouTube Video 3"
            className="video-frame"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/EdsxhVLDLb4?si=Q-_QjbNPx_JfZsQX"
            title="YouTube Video 4"
            className="video-frame"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          {/* Duplicate the videos for seamless sliding */}
          <iframe
            src="https://www.youtube.com/embed/jxCRlebiebw?si=lN1jQ0OdvXHango7"
            title="YouTube Video 1"
            className="video-frame"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/ru5Cku2t1JU?si=bGIPtW3iqmcogZ-X"
            title="YouTube Video 2"
            className="video-frame"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          
          <iframe
            src="https://www.youtube.com/embed/ajnCMSC4VPo?si=lhLLGnwdY0l1Ezrt"
            title="YouTube Video 3"
            className="video-frame"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/EdsxhVLDLb4?si=Q-_QjbNPx_JfZsQX"
            title="YouTube Video 4"
            className="video-frame"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Coming;
