import React from 'react';
import Link from 'next/link';
import { Button, CardActions, CardContent, Divider, Grid, Typography, Box } from '@mui/material';
import Avatar from 'components/ui-component/extended/Avatar';
import MainCard from 'components/ui-component/cards/MainCard';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';

const MembershipCard = () => (
  <MainCard title="Membership" content={false}>
    <CardContent>
      {/* Membership Level Section */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
        sx={{
          background: 'linear-gradient(45deg, #e0c3fc, #8ec5fc)',
          borderRadius: 1,
          mb: 2
        }}
      >
        <Box>
          <Typography variant="body2" color="textSecondary">
            Level
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Premium
          </Typography>
        </Box>
        <Avatar color="primary">
          <BusinessCenterTwoToneIcon fontSize="large" />
        </Avatar>
      </Box>

      {/* Duration and Expiry Date Section */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={6}>
          <Box p={2} bgcolor="#f6f6f6" borderRadius={1}>
            <Typography variant="body2" color="textSecondary">
              Duration
            </Typography>
            <Typography variant="h6">6 Months</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor="#f6f6f6" borderRadius={1}>
            <Typography variant="body2" color="textSecondary">
              Expiry Date
            </Typography>
            <Typography variant="h6">10-03-2025</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Benefits Section */}
      <Box p={2} bgcolor="#f6f6f6" borderRadius={1} mb={2}>
        <Typography variant="body2" color="textSecondary">
          Benefits
        </Typography>
        <Typography variant="h6">Exclusive Service</Typography>
      </Box>
    </CardContent>

    <Divider />

    {/* Upgrade Button */}
    <CardActions sx={{ justifyContent: 'center', p: 1 }}>
      <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: 1 }}>
        Upgrade Membership
      </Button>
    </CardActions>
  </MainCard>
);

export default MembershipCard;
