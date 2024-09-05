import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/Home.css';
import { getUpcoming } from '../Api/allApi'; // Adjust the import path as needed
import { Link } from 'react-router-dom';

function Upc() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch upcoming movies using the getUpcoming API function
    getUpcoming()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching upcoming movies:', error);
      });
  }, []);

  return (
    <div className='UpcomingMovie'>
      <div id="runn">
        <h4>UPCOMING MOVIES</h4>
      </div>
      <div style={{ marginTop: '80px' }} className="container">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 d-flex justify-content-center mb-4">
              <Card className="card-hover-effect" style={{ width: '18rem', height: '10rem' }}>
                <Card.Img
                  variant="top"
                  src={movie.poster_url} // Dynamically load the image
                  style={{ width: '100%', height: '425px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title style={{color:"white",fontWeight:"bold"}}>{movie.title}</Card.Title> {/* Movie title */}
                  <Card.Text style={{color:"white",fontWeight:"bold"}}>{movie.genre}</Card.Text> {/* Movie description */}
                  <Link to={`/UpDet/${movie.id}`}>
                    <Button className='tickets' variant="danger"><span className='ticketss'>Book Tickets</span></Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Upc;
