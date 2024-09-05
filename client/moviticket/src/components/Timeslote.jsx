import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import screen from '../assets/5ff3a50c.webp';
import '../assets/time.css'; // Import the CSS file

const Timeslote = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { movie, showtime } = location.state || {};

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const storedDate = localStorage.getItem('bookingDate');

    if (storedDate !== today) {
      localStorage.setItem('bookedSeats', JSON.stringify({}));
      localStorage.setItem('bookingDate', today);
    }

    const storedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || {};
    setBookedSeats(storedSeats[movie.title]?.[showtime] || []);
  }, [movie.title, showtime]);

  const handleSeatClick = (index) => {
    if (!bookedSeats.includes(index) && !selectedSeats.includes(index)) {
      setSelectedSeats([...selectedSeats, index]);
    } else if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== index));
    }
  };

  const isSelected = (index) => selectedSeats.includes(index);
  const isBooked = (index) => bookedSeats.includes(index);

  const handlePaymentClick = () => {
    const today = new Date().toISOString().split('T')[0];
    const storedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || {};

    if (!storedSeats[movie.title]) storedSeats[movie.title] = {};
    if (!storedSeats[movie.title][showtime]) storedSeats[movie.title][showtime] = [];
    storedSeats[movie.title][showtime] = [...storedSeats[movie.title][showtime], ...selectedSeats];

    localStorage.setItem('bookedSeats', JSON.stringify(storedSeats));
    localStorage.setItem('bookingDate', today);

    navigate('/confirmation', { 
      state: { 
        movieTitle: movie.title,
        moviePoster: movie.poster_url,
        showtime: showtime,
        selectedSeats: selectedSeats.map(seat => seat + 1), 
        totalAmount: selectedSeats.length * 150 
      }
    });
  };

  const seats = Array(96).fill(null);

  return (
    <div className="time baskervville-sc-regular" style={{ textAlign: 'center', paddingTop: '15px', paddingLeft: '20px', paddingRight: '20px', background: '#2C3E50', color: '#A89C6E', height: '100vh' ,fontWeight:'bold'}}>
      <Typography style={{fontFamily:'fantasy',fontWeight:'bold'}} variant="h4" gutterBottom>
        SELECT YOUR SEATS <br /> {movie ? `${movie.title} - ${showtime}` : 'Movie'}
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {seats.map((_, index) => (
          <Grid item key={index}>
            <Button
              variant="contained"
              onClick={() => handleSeatClick(index)}
              disabled={isBooked(index)}
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: isBooked(index) ? 'red' : isSelected(index) ? 'green' : '#ccc',
                color: 'white',
                fontWeight:'bold'
              }}
            >
              {index + 1}
            </Button>
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: '20px',fontWeight:'bold' }}>
        <img style={{ paddingTop: '10px' }} src={screen} alt="Screen" />
        <Typography style={{ paddingTop: "20px",fontWeight:'bold' }} variant="h6">
          Total Selected Seats: {selectedSeats.length}
        </Typography>
        <Typography style={{fontWeight:'bold'}} variant="h6">
          Total Amount: ₹{selectedSeats.length * 150}
        </Typography>
        <Typography variant="h6" style={{ marginTop: '20px',fontWeight:'bold' }}>
          Selected Seats: {selectedSeats.length > 0 ? selectedSeats.map(seat => seat + 1).join(', ') : 'None'}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
          onClick={handlePaymentClick}
          disabled={selectedSeats.length === 0}
        >
          PROCEED TO PAYMENT
        </Button>
      </div>
    </div>
  );
};

export default Timeslote;
