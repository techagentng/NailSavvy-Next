import Image from 'next/image';
import { Box, Grid, Typography, Button } from '@mui/material';

const TwoImageSection = () => {
  const images = [
    {
      src: '/image1.jpg',
      title: 'Our Lookbook',
      description: 'Explore our Lookbook to see some of our best work and a wide range of gel colors to choose from.',
      buttonText: 'Learn More'
    },
    {
      src: '/image2.jpg',
      title: 'Bridal Services',
      description:
        'Make Nailsavvy part of your wedding day, and let us pamper you and your crew with the ultimate bridal beauty experience.',
      buttonText: 'Learn More'
    }
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid
            item
            xs={12} // Full width on extra small screens
            md={6} // Half width on medium and larger screens
            key={index}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                height: '300px' // Adjust height as needed
              }}
            >
              {/* Background Image */}
              <Image
                src={image.src}
                alt={image.title}
                layout="fill"
                objectFit="cover"
                style={{ filter: 'brightness(50%)' }} // Dark overlay effect
              />

              {/* Overlay Content */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                  textAlign: 'center',
                  padding: 2
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {image.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {image.description}
                </Typography>
                <Button variant="contained" color="secondary" sx={{ textTransform: 'uppercase', paddingX: 4 }}>
                  {image.buttonText}
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TwoImageSection;
