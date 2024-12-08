'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Material-UI components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useMediaQuery from '@mui/material/useMediaQuery';

const Guest = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const downSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Left Section - Text Content */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: '#fcfcfc',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 2, md: 4 },
          position: 'relative', // To position the icons relative to this container
        }}
      >
        {/* Back Arrow Icon */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
          }}
          component={Link}
          href="/previous-page"
        >
          <ArrowBackIcon />
        </IconButton>

        {/* More Options Icon */}
        {!downSM && (
          <IconButton
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
            }}
          >
            <MoreVertIcon />
          </IconButton>
        )}

        <Stack spacing={3}>
          <Typography variant={downMD ? 'h4' : 'h3'} sx={{ fontWeight: 'bold' }}>
            Welcome Back!
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Sign in to continue exploring exclusive services.
          </Typography>

          {/* Buttons */}
          {['/login', '/register', '/guest'].map((link, index) => (
            <Button
              key={index}
              variant="outlined"
              fullWidth
              href={link}
              sx={{
                justifyContent: 'space-between',
                padding: '20px 24px',
                borderColor: '#ccc',
                textTransform: 'none',
                borderRadius: '6px',
                backgroundColor: 'transparent',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              {index === 0 && 'Existing User'}
              {index === 1 && 'New User'}
              {index === 2 && 'Continue as Guest'}
              <Typography variant="body2">&#x2192;</Typography>
            </Button>
          ))}
        </Stack>
      </Grid>

      {/* Right Section - Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          position: 'relative',
          height: '100vh',
        }}
      >
        <Image
          src="/assets/images/auth-img/Nails.png" // Replace with your image path
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </Grid>
    </Grid>
  );
};

export default Guest;
