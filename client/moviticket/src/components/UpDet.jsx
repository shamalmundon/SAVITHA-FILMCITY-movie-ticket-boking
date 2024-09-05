import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUpcoming } from '../Api/allApi';
import Button from 'react-bootstrap/Button';
import '../assets/UpDet.css'; // Add your custom styles here


function UpDet() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getUpcoming()
      .then((response) => {
        const movieData = response.data.find((m) => m.id === parseInt(id));
        setMovie(movieData);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, [id]);

  return (
    <div className="updet-container">
        <h1 style={{textAlign:'center',fontWeight:'bold',paddingBottom:'25px'}}>UPCOMING MOVIE</h1>
      {movie ? (
        <div className="d-flex flex-row align-items-center">
          <div className="image-container">
            <img src={movie.poster_url} alt={movie.title} className="movie-image" />
          </div>
          <div className="details-container">
            <h1 style={{fontWeight:'bold'}}>{movie.title}</h1>
            <h6>Genre: {movie.genre}</h6>
            <h6>Directed: {movie.director}</h6>
            <h6>Relese: {movie.release_date }</h6>
            <h6>Cast: {movie.cast }</h6>
            <p>{movie.description}</p>
            <Button variant="danger" className="trailer-button">
              <i className="fas fa-play"></i> Play Trailer
            </Button>
          </div>
        </div>
      ) : (
        <h1>Movie not found</h1>
      )}
    </div>
  );
}

export default UpDet;
