'use client';

// material-ui
import React, { useState, useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import Image from 'next/image';
import ThreeG from './threeg';
import TwoG from './twophoto';
// import Reward from './rewardSetion';
import Analytics from './analiticts';
import FormData1 from './form';
import Footer from './footer';

import Link from 'next/link';

const Appen = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto'; // Clean up
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide) => {
      setCurrentSlide(currentSlide);
    }
  };

  const handleNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  // const handleGoToSlide = (slideIndex) => {
  //   sliderRef.current?.slickGoTo(slideIndex);
  // };

  const navLinks = ['Services', 'Products', 'Lookbook', 'Bridal Bliss', 'Groups & Events', 'Rewards', 'About Us'];

  return (
    <>
      {/* AppBar for Navigation */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', sm: 'column' }, // Row on mobile, column on desktop
            alignItems: { xs: 'center', sm: 'center' },
            justifyContent: { xs: 'space-between', sm: 'center' }, // Space between for mobile
            px: 2
          }}
        >
          {/* Logo Section */}
          <Typography
            variant="h1"
            component="div"
            sx={{
              fontWeight: 700,
              paddingBottom: '20px',
              paddingTop: '20px',
              textTransform: 'uppercase',
              letterSpacing: 1
            }}
          >
            Nail<span style={{ fontWeight: 800 }}>Savvy</span>
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              width: '100%',
              maxWidth: '1200px',
              flexWrap: 'nowrap'
            }}
          >
            {/* Navigation Links */}
            {navLinks.map((link, index) => (
              <Button
                key={index}
                variant="text"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  color: 'inherit'
                }}
              >
                {link}
              </Button>
            ))}

            {/* Divider in Line with Menu */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: '50px',
                backgroundColor: '#000', // Black line for visibility
                mx: 2 // Margin for spacing
              }}
            />

            {/* Cart and Sign In */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Badge badgeContent={2} color="error">
                <ShoppingCartIcon />
              </Badge>
              <Link
                href="/login"
                sx={{ textDecoration: 'none' }} // Optional: Prevent underline styling
              >
                <Button variant="contained" color="secondary" sx={{ px: 7 }}>
                  Sign In
                </Button>
              </Link>
              ;
            </Box>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton color="inherit" sx={{ display: { xs: 'flex', sm: 'none' } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            padding: 2,
            backgroundColor: '#f9f9f9',
            textAlign: 'center'
          }
        }}
      >
        <Box role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'serif',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 2
            }}
          >
            Nail<span style={{ fontStyle: 'italic', fontWeight: 400 }}>Savvy</span>
          </Typography>

          <List>
            {navLinks.map((text, index) => (
              <ListItem key={index} sx={{ justifyContent: 'center' }}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem sx={{ justifyContent: 'center' }}>
              <Badge badgeContent={2} color="error">
                <ShoppingCartIcon />
              </Badge>
              <ListItemText primary="Cart" sx={{ pl: 1 }} />
            </ListItem>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  px: 4,
                  fontSize: '1rem'
                }}
              >
                Sign In
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Slider Section */}
      <Box
        sx={{
          height: '488px', // Slider height
          width: '100%',
          position: 'relative',
          backgroundColor: 'grey',
          overflowX: 'hidden' // Prevent horizontal scroll
        }}
      >
        {/* Slider Component */}
        <Slider {...settings}>
          <div
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <Image
              src="/assets/images/landing/a11.png"
              alt="Slide 1"
              layout="intrinsic"
              width={400} // Set a width (e.g., 600px)
              height={116} // Adjusted height (e.g., 300px)
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div>
            <Image
              src="/assets/images/landing/a11.png"
              alt="Slide 2"
              layout="intrinsic"
              width={400} // Set a width (e.g., 600px)
              height={116} // Adjusted height (e.g., 300px)
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div>
            <Image
              src="/assets/images/landing/a11.png"
              alt="Slide 3"
              layout="intrinsic"
              width={400} // Set a width (e.g., 600px)
              height={116} // Adjusted height (e.g., 300px)
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Slider>

        {/* Slider Controls positioned at the bottom */}
      </Box>

      {/* Text Section */}

      <ThreeG /> 
      <TwoG />
      <Analytics />
      <FormData1 />
      <Footer /> 
    </>
  );
};

export default Appen;
