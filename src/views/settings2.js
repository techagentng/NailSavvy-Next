'use client';

import React from 'react';
import { Grid, Typography, FormControlLabel, Switch, Stack, Divider, Button } from '@mui/material';

const SettingsPage2 = () => {
  // State for toggles
  const [emailNotifications, setEmailNotifications] = React.useState({
    booking: true,
    promo: true,
    newsletter: false
  });

  const [smsNotifications, setSmsNotifications] = React.useState({
    booking: true,
    promo: true,
    newsletter: true
  });

  const handleEmailToggle = (key) => {
    setEmailNotifications((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSmsToggle = (key) => {
    setSmsNotifications((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      {/* Header */}
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight="bold">
          Settings
        </Typography>
      </Grid>

      {/* Notification Settings */}
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Email Notification
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Receive email alerts for all Bookings, Updates and Newsletters.
        </Typography>
        <Stack spacing={2}>
          <FormControlLabel
            control={<Switch checked={emailNotifications.booking} onChange={() => handleEmailToggle('booking')} color="secondary" />}
            label="Receive Booking email alert"
          />
          <FormControlLabel
            control={<Switch checked={emailNotifications.promo} onChange={() => handleEmailToggle('promo')} color="secondary" />}
            label="Receive discount and promo email alert"
          />
          <FormControlLabel
            control={<Switch checked={emailNotifications.newsletter} onChange={() => handleEmailToggle('newsletter')} color="secondary" />}
            label="Receive Newsletter email alert"
          />
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          SMS Notification
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Receive SMS alerts for all Bookings, Updates and Newsletters.
        </Typography>
        <Stack spacing={2}>
          <FormControlLabel
            control={<Switch checked={smsNotifications.booking} onChange={() => handleSmsToggle('booking')} color="secondary" />}
            label="Receive Booking SMS alert"
          />
          <FormControlLabel
            control={<Switch checked={smsNotifications.promo} onChange={() => handleSmsToggle('promo')} color="secondary" />}
            label="Receive discount and promo SMS alert"
          />
          <FormControlLabel
            control={<Switch checked={smsNotifications.newsletter} onChange={() => handleSmsToggle('newsletter')} color="secondary" />}
            label="Receive Newsletter SMS alert"
          />
        </Stack>
      </Grid>

      {/* Divider */}
      <Grid item xs={12}>
        <Divider />
      </Grid>

      {/* Deactivate Account */}
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Deactivate Account
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          The account will no longer be available, and all data in the account will be permanently deleted.
        </Typography>
        <Button variant="contained" color="error">
          Deactivate Account
        </Button>
      </Grid>
    </Grid>
  );
};

export default SettingsPage2;
