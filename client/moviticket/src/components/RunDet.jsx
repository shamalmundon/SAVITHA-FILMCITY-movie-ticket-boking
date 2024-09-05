import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRunning } from '../Api/allApi';
import Button from 'react-bootstrap/Button';
import '../assets/UpDet.css';

function RunDet() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null); // Store the selected showtime
  const navigate = useNavigate();

  useEffect(() => {
    getRunning()
      .then((response) => {
        const movieData = response.data.find((m) => m.id === parseInt(id));
        setMovie(movieData);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, [id]);

  const handleBookNow = () => {
    if (selectedTime) {
      navigate(`/timeslote/${id}/${selectedTime}`, { 
        state: { movie, showtime: selectedTime } // Pass movie data and showtime in state
      });
    } else {
      alert('Please select a showtime before booking.');
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time); // Update selected showtime
  };

  return (
    <div className="updet-container">
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', paddingBottom: '25px' }}>RUNNING NOW</h1>
      {movie ? (
        <div className="d-flex flex-row align-items-center">
          <div className="image-container">
            <img src={movie.poster_url} alt={movie.title} className="movie-image" />
          </div>
          <div className="details-container">
            <h1 style={{ fontWeight: 'bold' }}>{movie.title}</h1>
            <h6>Genre: {movie.genre}</h6>
            <h6>Directed: {movie.director}</h6>
            <h6>Release: {movie.release_date}</h6>
            <h6>Cast: {movie.cast}</h6>
            <p>{movie.description}</p>
            <div className="showtime-buttons">
              <Button
                variant={selectedTime === '1130AM' ? 'primary' : 'outline-primary'}
                onClick={() => handleTimeSelect('1130AM')}
              >
                11:30 AM
              </Button>
              {' '}
              <Button
                variant={selectedTime === '0230PM' ? 'primary' : 'outline-primary'}
                onClick={() => handleTimeSelect('0230PM')}
              >
                02:30 PM
              </Button>
              {' '}
              <Button
                variant={selectedTime === '0730PM' ? 'primary' : 'outline-primary'}
                onClick={() => handleTimeSelect('0730PM')}
              >
                07:30 PM
              </Button>
            </div>
            <Button
              variant="danger"
              className="trailer-button"
              style={{ marginTop: '20px' }}
              onClick={handleBookNow}
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      ) : (
        <h1>Movie not found</h1>
      )}
    </div>
  );
}

export default RunDet;
