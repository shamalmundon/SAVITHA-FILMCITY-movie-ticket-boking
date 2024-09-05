import React, { useRef, useEffect } from 'react';
import { Typography, Button, Card } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postTicket } from '../Api/allApi'; // Ensure this path is correct
import Logoslider from './Logoslider';
import { Link } from 'react-router-dom';

const Qr = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const qrRef = useRef(null);
  const { qrData } = location.state || {};
  
  // Extract the email from qrData
  const { email } = qrData || {};

  // Get today's date and format it as 'YYYY-MM-DD'
  const today = new Date();
  const showday = today.toISOString().split('T')[0];

  // Include showday in QR code data
  const qrContent = `Movie: ${qrData.movieTitle}\nShowtime: ${qrData.showtime}\nSeats: ${qrData.selectedSeats ? qrData.selectedSeats.join(', ') : 'None'}\nTotal Amount: ₹${qrData.totalAmount}\nShowday: ${showday}`;

  // Function to submit ticket data to the backend
  const handleSubmitTicket = async () => {
    const ticketData = {
      movie_title: qrData.movieTitle,
      showtime: qrData.showtime,
      selected_seats: qrData.selectedSeats ? qrData.selectedSeats.join(', ') : '',
      total_amount: qrData.totalAmount,
      show_day: showday, // Use the formatted date
      email: qrData.email,
    };

    try {
      const response = await postTicket(ticketData);
      console.log('Ticket stored successfully:', response.data);
      toast.success('Ticket stored in backend successfully!');
    } catch (error) {
      console.error('Error storing ticket:', error);
      toast.error('Failed to store ticket.');
    }
  };

  // useEffect to call handleSubmitTicket when component mounts
  useEffect(() => {
    toast.success('Ticket is confirmed!');
    handleSubmitTicket(); // Store the ticket data
  }, []); // Empty dependency array ensures this runs once on mount

  const downloadQRCode = async () => {
    if (qrRef.current) {
      const canvas = await html2canvas(qrRef.current);
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'qrcode.png';
      link.click();
    }
  };

  const handleGoBack = () => {
    navigate('/'); // Navigate to the homepage or any other page
  };

  return (
    <div
      style={{
        textAlign: 'center',
        paddingTop: '60px',
        background: 'black',
        color: 'white',
        height: '100vh',
        backgroundImage: `url('https://images.unsplash.com/photo-1514306191717-452ec28c7814?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhlYXRlciUyMGN1cnRhaW58ZW58MHx8MHx8fDA%3D')`, // Add your image URL here
        backgroundSize: 'cover', // Ensure the image covers the whole div
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      }}
    >
      <Typography style={{fontWeight:'bold'}} variant="h4" gutterBottom>
        Success!
      </Typography>
      <Typography style={{fontWeight:'bold'}} variant="h6" gutterBottom>
        Your ticket has been booked successfully. Here is your QR Ticket:
      </Typography>
      <Typography style={{fontWeight:'bold',color:'#FFFF00'}} variant="h6">
        Email: {email}
      </Typography>
      <Card sx={{ maxWidth: 345, margin: 'auto', backgroundColor: 'grey.900', color: 'white' }}>
        <div ref={qrRef} style={{ padding: '20px' }}>
          <QRCode value={qrContent} />
        </div>
      </Card>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '20px' , fontWeight:'bold'}}
        onClick={downloadQRCode}
      >
        Download QR Code Ticket
      </Button><br />
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: '20px' ,fontWeight:'bold'}}
        onClick={handleGoBack}
      >
        Go to Home
      </Button>
      <ToastContainer />
      
      <div>
      <Link 
        to="/contact" 
        style={{ 
          color: 'blue', 
          padding: '10px', 
          fontSize: '18px', 
        }}
      >
        Contact
      </Link>
    </div>
     <footer style={{paddingTop:'100px'}}>
        <Logoslider/>
     </footer>
    </div>
  );
};

export default Qr;
