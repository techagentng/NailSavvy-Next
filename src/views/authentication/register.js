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
import Img from '../../../public/assets/images/Nails.png'; // Image path, update accordingly

// Custom components
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo from 'components/ui-component/Logo';
import AuthRegister from 'components/authentication/auth-forms/AuthRegister';

const Register = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
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
          justifyContent: 'center',
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
            width: '100%',
            maxWidth: 530,
          }}
        >
          {/* Top Right Icon */}
          <IconButton
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
            }}
          >
            <MoreVertIcon />
          </IconButton>

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

          {/* Register Form */}
          <AuthCardWrapper sx={{ backgroundColor: '#fcfcfc', margin: 0 }}>
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
    </Grid>
  );
};

export default Register;
