import { Box, Button, Container, Grid, Typography, styled, useTheme } from '@mui/material';
import React from 'react';

const StayInTouchSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingX: '80px', // Consistent padding with previous containers
        paddingY: 4,
        maxWidth: 'calc(100% - 160px)', // Adjusts for padding
        margin: '0 auto', // Centers the container
        backgroundColor: '#f7f2ec', // Background color
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}>
        Stay in Touch
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.7, marginBottom: theme.spacing(3) }}>
        By subscribing to our newsletter, we’ll keep you up to date with all our services, offerings, discounts and promos.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          textTransform: 'uppercase',
          paddingX: 4,
          backgroundColor: '#17a877', // Example button color
          '&:hover': {
            backgroundColor: '#138b67', // Hover effect
          },
        }}
      >
        Subscribe
      </Button>
    </Box>
  );
};

export default StayInTouchSection;
