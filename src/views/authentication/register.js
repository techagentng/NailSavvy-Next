'use client';

import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import SvgIcon from '@mui/material/SvgIcon';
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import AuthRegister from 'components/authentication/auth-forms/AuthRegister';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Register = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Left Side Wrapper with Blue Background */}
      <Grid container item sx={{ width: { xs: '100%', md: '60%' }, height: '100vh', backgroundColor: 'blue' }}>
        <Grid
          item
          sx={{
            flex: 1,
            position: 'relative',
            backgroundColor: '#fcfcfc',
            margin: 'auto',
            padding: 2
          }}
        >
          {/* Sign In Icon and Text */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              position: 'absolute',
              top: 70,
              right: 16,
              cursor: 'pointer'
            }}
          >
            <SvgIcon fontSize="large" sx={{ color: '#bf7663' }}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
            <Typography variant="body2" component={Link} href="/login" sx={{ textDecoration: 'none', color: 'black' }}>
              Sign In
            </Typography>
          </Stack>

          {/* Content */}
          <AuthCardWrapper sx={{ backgroundColor: '#fcfcfc', height: '100vh', width: '530px', margin: '0 auto' }}>
            <Grid container spacing={2}>
              <Grid item sx={{ mb: 3 }}>
                <Link href="#" aria-label="theme logo">
                  {/* Logo can be added here */}
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#eef7f6',
                    borderRadius: '8px',
                    marginBottom: '16px'
                  }}
                >
                  <ArrowBackIcon sx={{ fontSize: 30, color: '#af6d53' }} />
                </Box>
                <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                  Create Account
                </Typography>
                <Typography variant="caption" fontSize="16px">
                  Unlock a world of luxury nail care. Sign up today for an elevated beauty experience!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <AuthRegister />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography component={Link} href="/login" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                  Already have an account?
                </Typography>
              </Grid>
            </Grid>
          </AuthCardWrapper>
        </Grid>
      </Grid>

      {/* Right Side with Red Background */}
      <Grid
        item
        sx={{
          width: { xs: '100%', md: '40%' },
          height: '100vh',
          backgroundColor: 'red',
          backgroundImage: 'url(/assets/i)', // Add your image path here
          backgroundSize: 'cover', // Ensure the image covers the grid area
          backgroundRepeat: 'no-repeat', // Avoid repeating the image
          backgroundPosition: 'center', // Center the image
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h4" sx={{ color: 'white' }}>
          Right Side Content
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Register;
