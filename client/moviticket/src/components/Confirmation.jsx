import React, { useState } from 'react';
import { Typography, Button, Card, CardMedia, TextField, Snackbar, Box, Grid } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieTitle, moviePoster, selectedSeats, totalAmount, showtime } = location.state || {};

  const [email, setEmail] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Prepare the QR code data as an object
  const qrData = {
    movieTitle,
    showtime,
    selectedSeats,
    totalAmount,
    email,
  };

  const handleConfirm = () => {
    if (!email) {
      setOpenSnackbar(true);
      return;
    }
    // Navigate to the Qr page with the data object
    navigate('/qr', { state: { qrData } });
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        paddingTop: '60px', 
        background: 'black', 
        color: 'black', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
      }}
    >
      <Card sx={{ maxWidth: 345, margin: 'auto', backgroundColor: 'grey.900', color: 'white', boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="400"
          image={moviePoster}
          alt={movieTitle}
        />
      </Card>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Movie: {movieTitle}
      </Typography>
      <Typography variant="h6">
        Showtime: {showtime}
      </Typography>
      <Typography variant="h6">
        Seats: {selectedSeats ? selectedSeats.join(', ') : 'None'}
      </Typography>
      <Typography variant="h6">
        Total Amount: ₹{totalAmount}
      </Typography>
      <Box sx={{ mt: 4, width: '60%', maxWidth: 400 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Enter your Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                style: { backgroundColor: 'white', borderRadius: '4px' }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleConfirm}
              fullWidth
              sx={{fontSize: '16px',padding:'15px',marginBottom:'10px' }}
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Please enter your email"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Box>
  );
};

export default Confirmation;
