'use client';

import Link from 'next/link';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageComponent from './Nails.png';
// custom components
import AuthWrapper1 from 'components/authentication/AuthWrapper1';
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo from 'components/ui-component/Logo';
import AuthLogin from 'components/authentication/auth-forms/AuthLogin';
import AuthFooter from 'components/ui-component/cards/AuthFooter';

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <AuthWrapper1>
      <Grid container sx={{ minHeight: '100vh' }}>
        {/* Left Side - Form */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
          <AuthCardWrapper>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item sx={{ mb: 3 }}>
                <Link href="#" aria-label="logo">
                  <Logo />
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Stack alignItems="left" justifyContent="left" spacing={1}>
                  <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                    Create Account
                  </Typography>
                  <Typography variant="caption" fontSize="16px" textAlign="left">
                    Unlock a world of luxury nail care. Enjoy personalized service, and receive special offers curated just for you.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <AuthLogin />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography component={Link} href="/register" variant="subtitle1" sx={{ textDecoration: 'none', textAlign: 'center' }}>
                  Already have an account? Sign In
                </Typography>
              </Grid>
            </Grid>
          </AuthCardWrapper>
        </Grid>

        {/* Right Side - Image */}
        {/* <ImageComponent src="/background-image.png" alt="Background" width="100%" height="auto" /> */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', md: 'block' }
          }}
        />

        {/* Footer */}
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

// function ImageComponent (src, alt, width = '100%', height = 'auto' ) {
//   return (
//     <img
//       src={src}
//       alt={alt}
//       style={{ width, height }}
//     />
//   );
// };
export default Login;
