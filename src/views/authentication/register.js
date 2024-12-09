'use client';

import Link from 'next/link';
import Image from 'next/image';

// Material-UI components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useMediaQuery from '@mui/material/useMediaQuery';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Custom components
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo from 'components/ui-component/Logo';
import AuthRegister from 'components/authentication/auth-forms/AuthRegister';

const Register = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Grid container sx={{ height: '100vh', overflow: 'hidden' }}>
      {/* Left Section - Form */}
      <Grid
        container
        item
        sx={{
          width: { xs: '100%', md: '60%' },
          height: '100vh',
          overflowY: 'auto',
          p: { xs: 2, md: 3 },
          backgroundColor: '#fcfcfc',
          position: 'relative'
        }}
      >
        {/* Top Icons */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 16,
            left: 16
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          sx={{
            position: 'absolute',
            top: 16,
            right: 16
          }}
        >
          <MoreVertIcon />
        </IconButton>

        <Grid
          item
          sx={{
            m: 'auto',
            p: 2,
            width: '100%',
            maxWidth: 530
          }}
        >
          {/* Register Form */}
          <AuthCardWrapper>
            <Grid container spacing={2}>
              <Grid item sx={{ mb: 3 }}>
                <Link href="/" aria-label="theme logo">
                  <Logo />
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Stack alignItems="flex-start" justifyContent="flex-start" spacing={1}>
                  <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                    Create Account
                  </Typography>
                  <Typography variant="caption" fontSize="16px" textAlign="left">
                    Unlock a world of luxury nail care. Sign up today for an elevated beauty experience!
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <AuthRegister />
              </Grid>

              {/* OR Divider */}
              <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                <Divider>
                  <Typography variant="body2" color="textSecondary">
                    OR
                  </Typography>
                </Divider>
              </Grid>

              {/* Google Sign-In */}
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <IconButton
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    border: '1px solid #ddd',
                    borderRadius: 2,
                    p: '8px 16px',
                    width: '100%',
                    maxWidth: 300,
                    mx: 'auto',
                    backgroundColor: '#fff',
                    '&:hover': {
                      backgroundColor: '#f5f5f5'
                    }
                  }}
                >
                  <Image src="/assets/images/auth-img/google.png" alt="Google Icon" width={20} height={20} style={{ marginRight: 12 }} />
                  <Typography variant="button" color="textPrimary" sx={{ flex: 1, textAlign: 'center' }}>
                    Sign in with Google
                  </Typography>
                </IconButton>
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography component={Link} href="/login" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                  Already have an account? Sign In
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
            width: { xs: '100%', md: '40%' },
            height: '100vh',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Image src="/assets/images/auth-img/Nails.png" alt="Background" fill style={{ objectFit: 'cover' }} priority />
        </Grid>
      )}
    </Grid>
  );
};

export default Register;
