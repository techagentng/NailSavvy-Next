import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';

const ResponsiveImageSection = () => {
  const images = [
    { src: '/assets/images/', title: 'BAIB' },
    { src: '/path/to/image2.jpg', title: 'GelX' },
    { src: '/path/to/image3.jpg', title: 'Dual Form' },
    { src: '/path/to/image4.jpg', title: 'Contact Gel' },
    { src: '/path/to/image5.jpg', title: 'Poly Gel Overlay' },
    { src: '/path/to/image6.jpg', title: 'Hard Gel Overlay' }
  ];

  return (
    <Box sx={{ padding: 4 }}>
      {/* Responsive Grid */}
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid
            item
            xs={12} // Full width on extra small screens
            sm={6} // Half width on small screens
            md={4} // One-third width on medium and larger screens
            key={index}
          >
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2
              }}
            >
              <Image
                src={image.src}
                alt={image.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: '#fff',
                  padding: '8px',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                {image.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Button */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            textTransform: 'uppercase',
            paddingX: 4,
            fontSize: '1rem'
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default ResponsiveImageSection;
