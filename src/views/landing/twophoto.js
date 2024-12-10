import Image from 'next/image';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TwoImageSection = () => {
  const theme = useTheme();
  const images = [
    {
      src: '/assets/images/landing/new1.png',
      title: 'Our Lookbook',
      description: 'Explore our Lookbook to see some of our best work and a wide range of gel colors to choose from.',
      buttonText: 'Learn More'
    },
    {
      src: '/assets/images/landing/new1.png',
      title: 'Bridal Services',
      description:
        'Make Nailsavvy part of your wedding day, and let us pamper you and your crew with the ultimate bridal beauty experience.',
      buttonText: 'Learn More'
    }
  ];

  return (
    <Box
      sx={{
        paddingX: '10px', // Added padding to both sides for consistency
        paddingY: 4, // Vertical padding
        margin: '0 auto', // Centers the content
        maxWidth: '100%', // Ensures the content takes up full width
      }}
    >
      <Grid container spacing={4}>
        {images.map((image) => (
          <Grid item xs={12} md={6} key={image.src}>
            <Box sx={{ position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
              <Image 
                src={image.src}
                alt={image.title}
                layout="responsive"
                width={600}
                height={400}
                style={{ borderRadius: '8px' }} 
              />
            </Box>
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              {image.title}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              {image.description}
            </Typography>
            <Button variant="contained" color="primary" sx={{ textTransform: 'uppercase' }}>
              {image.buttonText}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TwoImageSection;
