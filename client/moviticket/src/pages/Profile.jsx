import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Grid, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../components/Header';
import '../assets/globe.css'
import ScrollToTop from '../components/ScrollToTop';

const apiKey = '48a26c6e009c4cb2822aafb39e726c1b';
const url = `https://newsapi.org/v2/everything?q=film&language=en&apiKey=${apiKey}`;

const NewsCard = styled(Card)({
  marginBottom: '16px',
});

const NewsCardMedia = styled(CardMedia)({
  height: 300,
});

const Profile = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setError('Error fetching news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <div style={{backgroundColor:'#353839',color:'white'}}>
      <Header/>
      <ScrollToTop/>
       <Container>
      <Typography style={{alignContent:'center',textAlign:'center',fontWeight:'bold',padding:'20px'}} variant="h4" gutterBottom>TRENDING FILM NEWS <svg
            className="globe"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100"
            height="100"
          >
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none" />
            <path
              d="M2 12a10 10 0 1 1 20 0A10 10 0 0 1 2 12Zm2 0a8 8 0 1 0 16 0A8 8 0 0 0 4 12Zm8-7a7 7 0 0 1 7 7h-4a3 3 0 0 0-3-3V5Zm0 14a7 7 0 0 1-7-7h4a3 3 0 0 0 3 3v4Zm7-7a7 7 0 0 1-7 7v-4a3 3 0 0 0 3-3h4Z"
              fill="black"
            />
          </svg></Typography>
      <Grid container spacing={3}>
        {news.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NewsCard>
              {article.urlToImage && (
                <NewsCardMedia
                  component="img"
                  image={article.urlToImage}
                  alt={article.title}
                />
              )}
              <CardContent>
                <Typography variant="h6">{article.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {article.description}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Source: {article.source.name}
                </Typography>
              </CardContent>
            </NewsCard>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
   
  );
};

export default Profile;
