'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  return (
    <Grid container sx={{ height: '100vh', overflow: 'hidden' }}>
      {/* Left Section - Form */}
      <Grid
        container
        item
        sx={{
          width: { xs: '100%', md: '60%' },
          height: '100vh',
          overflowY: 'auto', // Enables vertical scrolling on the left section
          padding: { xs: 2, md: 3 },
          backgroundColor: '#fcfcfc'
        }}
      >
        <Grid
          item
          sx={{
            position: 'relative',
            margin: 'auto',
            padding: 2,
            width: '100%',
            maxWidth: 530
          }}
        >
          {/* Top Right Icon */}
          <IconButton
            sx={{
              position: 'absolute',
              top: 16,
              right: 16
            }}
          >
            <MoreVertIcon />
          </IconButton>

          {/* Back Arrow */}
          <IconButton
            sx={{
              position: 'absolute',
              top: 16,
              left: 16
            }}
            onClick={() => router.back()}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Register Form */}
          <AuthCardWrapper sx={{ margin: 0 }}>
            <Grid container spacing={2}>
              <Grid item sx={{ mb: 3 }}>
                <Link href="#" aria-label="theme logo">
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

              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <IconButton
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start', // Align content to the left inside the button
                    border: '1px solid #ddd',
                    borderRadius: 2,
                    padding: '8px 16px',
                    width: '100%',
                    maxWidth: 300,
                    margin: '0 auto',
                    backgroundColor: '#fff', // Ensures a clean background for the button
                    '&:hover': {
                      backgroundColor: '#f5f5f5' // Adds a hover effect
                    }
                  }}
                >
                  <img
                    src="/assets/images/auth-img/google.png" // Replace with the correct Google icon path
                    alt="Google Icon"
                    style={{ width: 20, height: 20, marginRight: 12 }}
                  />
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
            overflow: 'hidden' // Prevents scrolling on the right side
          }}
        >
          <Image
            src="/assets/images/auth-img/Nails.png" // Replace with your image path
            alt="Background"
            layout="fill" // Makes the Image stretch to cover the container
            objectFit="cover" // Maintains aspect ratio while covering the container
            priority
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Register;
