'use client';

import React from 'react';
import { Grid, Typography, TextField, Button, Stack, Avatar, Tabs, Tab } from '@mui/material';
import { Person, Email, Phone, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

const SettingsPage = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Grid container spacing={3} sx={{ p: 4 }}>
      {/* Header Section */}
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight="bold">
          Settings
        </Typography>
      </Grid>

      {/* Tabs and Save Button Section */}
      <Grid
        item
        xs={12}
        container
        justifyContent="space-evenly" // Space items evenly across the grid
        alignItems="center"
      >
        {/* Heading */}
        <Typography variant="h4" fontWeight="bold">
          Settings
        </Typography>

        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            display: 'flex'
          }}
        >
          <Tab label="Profile" />
          <Tab label="Settings" />
        </Tabs>

        {/* Save Changes Button */}
        <Button variant="contained" color="secondary">
          Save Changes
        </Button>
      </Grid>

      {/* Content Section */}
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Profile Photo */}
        <Grid item xs={12}>
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Avatar
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Profile Photo"
              sx={{ width: 120, height: 120 }}
            />
            <Button variant="outlined" color="primary">
              Upload Image
            </Button>
            <Button variant="contained" color="secondary">
              Save Changes
            </Button>
          </Stack>
        </Grid>

        {/* Personal Information */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Personal Information
          </Typography>
          <Stack spacing={3}>
            <TextField
              label="Full Name"
              defaultValue="Flora Madu"
              variant="outlined"
              InputProps={{
                startAdornment: <Person sx={{ mr: 1 }} />
              }}
            />
            <TextField
              label="Email Address"
              defaultValue="flora.madu@gmail.com"
              variant="outlined"
              InputProps={{
                startAdornment: <Email sx={{ mr: 1 }} />
              }}
            />
            <TextField
              label="Phone Number"
              defaultValue="0803 456 7890"
              variant="outlined"
              InputProps={{
                startAdornment: <Phone sx={{ mr: 1 }} />
              }}
            />
            <Button variant="contained" color="secondary">
              Save Changes
            </Button>
          </Stack>
        </Grid>

        {/* Change Password */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Change Password
          </Typography>
          <Stack spacing={3}>
            <TextField
              label="Enter Current Password"
              type="password"
              variant="outlined"
              InputProps={{
                startAdornment: <Lock sx={{ mr: 1 }} />,
                endAdornment: <Visibility sx={{ cursor: 'pointer' }} />
              }}
            />
            <TextField
              label="Enter New Password"
              type="password"
              variant="outlined"
              InputProps={{
                startAdornment: <Lock sx={{ mr: 1 }} />,
                endAdornment: <Visibility sx={{ cursor: 'pointer' }} />
              }}
              helperText={
                <Typography variant="caption">
                  At least:
                  <ul>
                    <li>8 Characters Minimum</li>
                    <li>One Uppercase Character</li>
                    <li>One Lowercase Character</li>
                    <li>One Number</li>
                  </ul>
                </Typography>
              }
            />
            <TextField
              label="Confirm New Password"
              type="password"
              variant="outlined"
              InputProps={{
                startAdornment: <Lock sx={{ mr: 1 }} />,
                endAdornment: <VisibilityOff sx={{ cursor: 'pointer' }} />
              }}
            />
            <Button variant="contained" color="secondary">
              Save Changes
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SettingsPage;
