import Image from 'next/image';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ResponsiveImageSection = () => {
  const theme = useTheme();
  const images = [
    { src: '/assets/images/landing/i1.png', title: 'BAIB' },
    { src: '/assets/images/landing/i2.png', title: 'GelX' },
    { src: '/assets/images/landing/i3.png', title: 'Dual Form' },
    { src: '/assets/images/landing/i4.png', title: 'Contact Gel' },
    { src: '/assets/images/landing/i5.png', title: 'Poly Gel Overlay' },
    { src: '/assets/images/landing/i6.png', title: 'Hard Gel Overlay' }
  ];

  return (
    <Box sx={{ paddingX: '16px', paddingY: theme.spacing(4) }}>
      <Grid container spacing={3}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.src}>
            <Box sx={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
              <Image
                src={image.src}
                alt={image.title}
                layout="responsive"
                width={500}
                height={300}
                style={{ borderRadius: '8px' }}
              />
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
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            paddingX: theme.spacing(4),
            textTransform: 'uppercase',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default ResponsiveImageSection;
