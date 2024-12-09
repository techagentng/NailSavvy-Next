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
    <Box sx={{ padding: theme.spacing(4), maxWidth: 'lg', margin: '0 auto' }}>
      <Grid container spacing={4}>
        {images.slice(0, 2).map((image) => (
          <Grid item xs={12} md={6} key={image.src}>
            <Box sx={{ position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
              <Image src={image.src} alt={image.title} layout="responsive" width={600} height={400} style={{ borderRadius: '8px' }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TwoImageSection;
