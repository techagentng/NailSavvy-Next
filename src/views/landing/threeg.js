import Image from 'next/image';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ResponsiveImageSection = () => {
  const theme = useTheme();
  const images = [
    { src: '/image1.jpg', title: 'BAIB' },
    { src: '/image2.jpg', title: 'GelX' },
    { src: '/image3.jpg', title: 'Dual Form' },
    { src: '/image4.jpg', title: 'Contact Gel' },
    { src: '/image5.jpg', title: 'Poly Gel Overlay' },
    { src: '/image6.jpg', title: 'Hard Gel Overlay' }
  ];

  return (
    <Box sx={{ padding: theme.spacing(4), maxWidth: 'lg', margin: '0 auto' }}>
      <Grid container spacing={3}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.src}>
            <Box sx={{ position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
              <Image src={image.src} alt={image.title} layout="responsive" width={500} height={300} style={{ borderRadius: '8px' }} />
              <Typography
                variant="h6"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  textAlign: 'center',
                  padding: '8px'
                }}
              >
                {image.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: theme.spacing(4) }}>
        <Button variant="contained" color="secondary" size="large" sx={{ paddingX: theme.spacing(4), textTransform: 'uppercase' }}>
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default ResponsiveImageSection;
