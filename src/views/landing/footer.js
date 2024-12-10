import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { LocationOn, Phone, Email, Instagram, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import Image from 'next/image';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: '#ffff',
      paddingY: 4,
      paddingX: '80px', // Matches the width
      marginTop: 'auto' // To push footer to the bottom
    }}
  >
    <Grid container spacing={4}>
      {/* First Column - Logo */}
      <Grid item xs={12} md={3}>
        <Image
          src="/path-to-logo.png" // Replace with your actual logo path
          alt="Logo"
          width={150}
          height={50}
        />
      </Grid>

      {/* Second Column - Address */}
      <Grid item xs={12} md={3}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Address:
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOn sx={{ marginRight: 2 }} />
          <Typography variant="body1">4th Floor Mega Plaza, Victoria Island, Lagos.</Typography>
        </Box>
      </Grid>

      {/* Third Column - Contact */}
      <Grid item xs={12} md={3}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Contact:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <Phone sx={{ marginRight: 2 }} />
            <Typography variant="body1">090 628 749 67</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <Phone sx={{ marginRight: 2 }} />
            <Typography variant="body1">090 628 749 67</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Email sx={{ marginRight: 2 }} />
            <Typography variant="body1">info@nailsavvy.com</Typography>
          </Box>
        </Box>
      </Grid>

      {/* Fourth Column - Follow Us */}
      <Grid item xs={12} md={3}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Follow us @nailsavvyng
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton href="https://instagram.com/nailsavvyng" target="_blank">
            <Instagram />
          </IconButton>
          <IconButton href="https://facebook.com/nailsavvyng" target="_blank">
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com/nailsavvyng" target="_blank">
            <Twitter />
          </IconButton>
          <IconButton href="https://linkedin.com/nailsavvyng" target="_blank">
            <LinkedIn />
          </IconButton>
        </Box>
      </Grid>
    </Grid>

    {/* Footer Divider Line */}
    <Box sx={{ borderBottom: '1px solid #d1d1d1', marginY: 4 }} />

    {/* Bottom Section - Copyright and Links */}
    <Grid container spacing={4}>
      {/* Left Side - Copyright Text */}
      <Grid item xs={12} md={6}>
        <Typography variant="body2" sx={{ textAlign: 'left' }}>
          © 2024 NailSavvyNG. All rights reserved.
        </Typography>
      </Grid>

      {/* Right Side - Menu Links */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3 }}>
        <Link href="#" sx={{ textDecoration: 'none', color: '#000' }}>
          Link1
        </Link>
        <Link href="#" sx={{ textDecoration: 'none', color: '#000' }}>
          Link2
        </Link>
        <Link href="#" sx={{ textDecoration: 'none', color: '#000' }}>
          Link3
        </Link>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
