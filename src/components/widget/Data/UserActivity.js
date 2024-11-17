'use client';

import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Box, Typography, TextField, MenuItem, Stack } from '@mui/material';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';

const UserActivity = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [service, setService] = useState('Service 2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const services = ['Service 1', 'Service 2', 'Service 3', 'Service 4', 'Service 5'];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('NS36789');
    setTooltipOpen(true);
    setTimeout(() => {
      setTooltipOpen(false);
    }, 2000);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
    borderRadius: 2,
    outline: 'none'
  };

  return (
    <>
      <MainCard
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EventNoteIcon sx={{ mr: 1 }} />
              <Typography variant="h6">Upcoming Appointment</Typography>
            </Box>
            <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
              View details
            </Typography>
          </Box>
        }
      >
        <CardContent>
          <Typography variant="h4" color="textSecondary" sx={{ mb: 1 }}>
            Booking Details
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">Service</Typography>
                  <Typography variant="body2">Service 2</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">Date</Typography>
                  <Typography variant="body2">Fri, Oct 4, 2024</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">Time</Typography>
                  <Typography variant="body2">12:00 PM</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">Status</Typography>
                  <Typography variant="body2" color="error">
                    Pending
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle2">Booking Reference Number</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  NS36789
                </Typography>
                <Tooltip title="Copied!" open={tooltipOpen} onClose={() => setTooltipOpen(false)}>
                  <Button variant="text" size="small" onClick={handleCopy}>
                    Copy
                  </Button>
                </Tooltip>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'space-between', flexDirection: 'row', gap: 1, mt: 2 }}>
          <Button variant="outlined" color="error" sx={{ width: '50%' }}>
            Cancel
          </Button>
          <Button variant="contained" color="warning" sx={{ width: '50%' }} onClick={handleOpen}>
            Reschedule
          </Button>
        </CardActions>
      </MainCard>
      {/* Modal Component */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Book Appointment</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Stack spacing={2}>
              {' '}
              {/* Add spacing between the components */}
              <Typography variant="body2" gutterBottom>
                I’m booking appointment for:
              </Typography>
              <TextField select fullWidth variant="outlined" value="Me" size="small">
                <MenuItem value="Me">Me</MenuItem>
                <MenuItem value="Someone else">Someone else</MenuItem>
              </TextField>
            </Stack>

            <Typography variant="body2" gutterBottom>
              Select Service
            </Typography>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={service}
              onChange={(e) => setService(e.target.value)}
              size="small"
              sx={{ mb: 2 }}
            >
              {services.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Select Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                size="small"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <TextField
                label="Select Time"
                type="time"
                fullWidth
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                size="small"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Box>

            <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }} onClick={handleClose}>
              Complete Booking
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default UserActivity;
