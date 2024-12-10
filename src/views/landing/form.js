import { Box, Button, Grid, Typography, TextField, InputAdornment, useTheme } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const StayInTouchSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingX: { xs: '16px', sm: '40px', md: '80px' }, // Responsive padding for different screen sizes
        paddingY: 4,
        margin: '0 auto',
        backgroundColor: '#f7f2ec',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack content on small screens, horizontal on larger screens
        justifyContent: 'space-between',
        gap: theme.spacing(4)
      }}
    >
      {/* Left Side with Heading and Text */}
      <Box sx={{ flex: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}>
          Stay in Touch
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7, marginBottom: theme.spacing(3) }}>
          By subscribing to our newsletter, we’ll keep you up to date with all our services, offerings, discounts, and promos.
        </Typography>
      </Box>

      {/* Form Section: Right Side with Input Fields */}
      <Box
        sx={{
          flex: 4,
          backgroundColor: '#fff',
          padding: theme.spacing(4),
          borderRadius: '8px',
          boxShadow: 3,
          width: '100%' // Ensures it doesn't overflow on small screens
        }}
      >
        {/* Full Name Input with Icon */}
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          sx={{
            marginBottom: theme.spacing(2),
            '& .MuiOutlinedInput-root': {
              height: '45px'
            },
            '& .MuiInputLabel-root': {
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: '40px'
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            )
          }}
        />

        {/* Email and Phone Number Inputs with Icons */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Enter Email"
              variant="outlined"
              sx={{
                marginBottom: theme.spacing(2),
                '& .MuiOutlinedInput-root': {
                  height: '45px'
                },
                '& .MuiInputLabel-root': {
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: '40px'
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Enter Phone Number"
              variant="outlined"
              sx={{
                marginBottom: theme.spacing(2),
                '& .MuiOutlinedInput-root': {
                  height: '45px'
                },
                '& .MuiInputLabel-root': {
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: '40px'
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>

        {/* Subscribe Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: '#ff6b6b',
            color: '#fff',
            textTransform: 'uppercase',
            paddingX: 4,
            width: '100%', // Ensures button takes full width
            '&:hover': {
              backgroundColor: '#e65555'
            }
          }}
        >
          Subscribe
        </Button>

        {/* Privacy Policy Link */}
        <Typography variant="body2" sx={{ marginTop: theme.spacing(2) }}>
          By subscribing you agree to our{' '}
          <a href="#" style={{ color: '#ff6b6b' }}>
            Privacy Policy
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default StayInTouchSection;
