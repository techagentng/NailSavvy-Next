'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Material-UI components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useMediaQuery from '@mui/material/useMediaQuery';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Img from '../../../public/assets/images/Nails.png';
// Custom components
import AuthWrapper1 from 'components/authentication/AuthWrapper1';
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo from 'components/ui-component/Logo';
import AuthLogin from 'components/authentication/auth-forms/AuthLogin';
import AuthFooter from 'components/ui-component/cards/AuthFooter';

const Login = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const downSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const router = useRouter();

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Left Section - Form */}
      <Grid
        container
        item
        sx={{
          width: { xs: '100%', md: '60%' },
          height: '100vh',
          justifyContent: downMD ? 'center' : 'flex-start',
          padding: { xs: 2, md: 3 },
        }}
      >
        <Grid
          item
          sx={{
            position: 'relative',
            backgroundColor: '#fcfcfc',
            margin: 'auto',
            padding: 2,
            width: { xs: '90%', sm: '80%', md: '100%' },
          }}
        >
          {/* Top Right Icon */}
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

          {/* Back Arrow */}
          <IconButton
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
            }}
            onClick={() => router.back()}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Login Form */}
          <AuthCardWrapper
            sx={{
              backgroundColor: '#fcfcfc',
              width: { xs: '100%', md: '530px' },
              margin: '0 auto',
            }}
          >
            <Grid container spacing={2}>
              <Grid item sx={{ mb: 3, textAlign: 'center' }}>
                <Link href="#" aria-label="theme logo">
                  <Logo />
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Stack alignItems="flex-start" justifyContent="flex-start" spacing={1}>
                  <Typography color="secondary.main" gutterBottom variant={downMD ? 'h4' : 'h2'}>
                    Login
                  </Typography>
                  <Typography variant="caption" fontSize="16px" textAlign="left">
                    Welcome back! Please log in to access your account and continue enjoying our services.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <AuthLogin />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} textAlign={downSM ? 'center' : 'left'}>
                <Typography component={Link} href="/register" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                  Don't have an account? Register
                </Typography>
              </Grid>
            </Grid>
          </AuthCardWrapper>
        </Grid>
      </Grid>

      {/* Right Section - Image */}
      {!downMD && (
        <Grid
          item
          sx={{
            width: '40%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={Img} // Replace with your image path
            alt="Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the image covers the grid area
            }}
          />
        </Grid>
      )}

      {/* Footer */}
      {downSM && (
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
