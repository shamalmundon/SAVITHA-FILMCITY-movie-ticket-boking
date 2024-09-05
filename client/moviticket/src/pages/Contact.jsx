import React, { useState } from 'react';
import { postContact } from '../Api/allApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/contact.css'; // Import custom CSS
import map from '../assets/map.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    mobile: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postContact(formData);
      setSuccessMessage('Message sent successfully!');
      setErrorMessage(''); // Clear any previous error messages
      setFormData({ email: '', name: '', mobile: '', message: '' }); // Clear the form
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage('Failed to send message. Please try again.');
      setSuccessMessage(''); // Clear any previous success messages
    }
  };

  return (
    <div style={{ backgroundColor: '#F8F8F8', color: 'black', }}>
      <Header />
      <div 
  className="contact-header" 
  style={{
    backgroundImage: `url('https://static.wixstatic.com/media/6dc4a8_2bec6ea75bfc444181e6406c7c05aaac~mv2.jpg/v1/fill/w_640,h_206,al_c,q_90,enc_auto/6dc4a8_2bec6ea75bfc444181e6406c7c05aaac~mv2.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',  // Adjust this value to increase or decrease height
    padding: '20px',
    color: 'white'
  }}
>
  <h1 style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '10px' }}>CONTACT US</h1>
  <h6 style={{ textAlign: 'center', letterSpacing: '.3rem' }}>WE WILL CONNECT WITH YOU SOON, SAVITHA FILM CITY</h6>
</div>


      <div className="container">
        <div className="row contact-form-wrapper">
          <div className="col-md-6">
          <div style={{ borderRadius: '10px', overflow: 'hidden', paddingTop: '45px' }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.4028868507967!2d75.35502207458855!3d11.877009337931103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d4f217746d3%3A0xf2b1d22e652ce79c!2sSavitha%20Film%20City!5e0!3m2!1sen!2sin!4v1724774545940!5m2!1sen!2sin"
    width="100%"
    height="500"
    style={{ border: 0, borderRadius: '10px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Location Map"
  ></iframe>
</div>

          </div>
          <div className="col-md-6">
            {/* Form Column */}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          </div>
        </div>
      </div>

      
      <div className="row" style={{paddingTop:'60px'}}>
            <div className="col-md-4 text-center">
              <i className="fa-solid fa-location-dot fa-2x mb-3"></i>
              <h5 className="font-weight-bold">Savitha Theatre <br /> Padannapalam, Kannur <br /> Kerala, 670014 <br /> India</h5>
            </div>
            <div className="col-md-4 text-center">
              <i className="fa-solid fa-envelope fa-2x mb-3"></i>
              <h5 className="font-weight-bold">Email <br /> savitha@gmail.com</h5>
            </div>
            <div className="col-md-4 text-center">
              <i className="fa-solid fa-phone fa-2x mb-3"></i>
              <h5 className="font-weight-bold">Phone <br /> +91 7025254974</h5>
            </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
