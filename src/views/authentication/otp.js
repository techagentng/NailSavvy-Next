'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Material-UI components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useMediaQuery from '@mui/material/useMediaQuery';

// Custom components
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import OTPInput from './otpInpute';

const VerifyNumber = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const router = useRouter();

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Left Section - Form */}
      <Grid
        container
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: '#fcfcfc',
          height: '100vh',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: 2, md: 4 },
        }}
      >
        {/* Back Arrow Icon */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 2,
          }}
          onClick={() => router.back()}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* More Options Icon */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 2,
          }}
        >
          <MoreVertIcon />
        </IconButton>

        <Grid
          item
          sx={{
            width: '100%',
            maxWidth: 630,
          }}
        >
          <AuthCardWrapper sx={{ backgroundColor: '#fcfcfc' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack alignItems="flex-start" justifyContent="flex-start" spacing={1}>
                  <Typography color="secondary.main" gutterBottom variant={downMD ? 'h4' : 'h3'}>
                    Verify your number
                  </Typography>
                  <Typography variant="caption" fontSize="16px" textAlign="left">
                    You're almost there! Check your inbox for a 6-digit verification code to confirm your phone number. This step helps us
                    keep your account secure and provide the best personalized service.
                  </Typography>
                </Stack>
              </Grid>

              {/* OTP Input */}
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <OTPInput length={6} />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary">
                  Please enter the one-time password sent to your <strong>0803 456 7890</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component={Link} href="#" variant="subtitle2" color="primary" sx={{ textDecoration: 'none' }}>
                  Didn't get OTP? Click here to resend
                </Typography>
              </Grid>

              {/* Complete Verification Button */}
              <Grid item xs={12} sx={{ mt: 2 }}>
                <IconButton
                  fullWidth
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: '#fff',
                    padding: 1.5,
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  Complete Verification
                </IconButton>
              </Grid>
            </Grid>
          </AuthCardWrapper>
        </Grid>
      </Grid>

      {/* Right Section - Image */}
      {!downMD && (
        <Grid
          item
          md={6}
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <img
            src="/assets/images/auth-img/Nails.png" // Replace with your image path
            alt="Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default VerifyNumber;
