import { Box, Button, Container, Grid, Typography, styled, useTheme } from '@mui/material';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import React from 'react';
import Image from 'next/image';

// Styled component for listing items
const Lists = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

const Analytics = () => {
  const theme = useTheme();
  const listSX = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.7rem',
    padding: '10px 0',
    fontSize: '1rem',
    color: theme.palette.grey[900],
    svg: { color: '#17a877' },
  };

  const ListItem = ({ children }) => (
    <Typography sx={listSX}>
      <IconCircleCheckFilled size={20} /> {children}
    </Typography>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: '80px', // Added padding on both sides for consistency
        paddingY: 4, // Vertical padding
        maxWidth: 'calc(100% - 20px)', // Adjust max width to account for padding
        margin: '0 auto', // Centers the component
        flexWrap: 'wrap', // Ensures responsiveness for smaller screens
      }}
    >
      {/* Text Section */}
      <Box sx={{ maxWidth: '60%', minWidth: '300px' }}>
        <Typography variant="h2" sx={{ marginBottom: theme.spacing(2) }}>
          Relax you are
          <br /> In safe hands
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
          Our expert Nail Artists are skilled in The NailsavvyWay, ensuring a flawless nail treatment from start to finish. Enjoy
          personalized style and care advice, tailored specifically for you, while our professionals work their magic.
        </Typography>
        <Box sx={{ marginTop: theme.spacing(3) }}>
          <Button variant="contained" color="primary" size="large" sx={{ textTransform: 'uppercase', paddingX: 4 }}>
            Explore Dashboard
          </Button>
        </Box>
      </Box>

      {/* Image Section */}
      <Box sx={{ maxWidth: '40%' }}>
        <Image
          src="/assets/images/landing/ali.png"
          alt="Dashboard"
          layout="responsive"
          width={500}
          height={300}
          style={{ borderRadius: '1px' }}
        />
      </Box>
    </Box>
  );
};

export default Analytics;
