import { Box, Typography, Button } from '@mui/material';

const RewardsSection = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 4,
      borderRadius: 0,
      background: 'linear-gradient(to right, #2c2c2c, #1a1a1a)', // Dark gradient background
      color: '#fff',
      textAlign: 'left',
      flexWrap: 'wrap' // Ensures responsiveness for smaller screens
    }}
  >
    {/* Text Section */}
    <Box sx={{ maxWidth: '60%', minWidth: '300px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        My Rewards
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
        At Nailsavvy, we reward our loyal clients with exciting perks, discounts, and VIP experiences. Whether youre referring friends,
        earning points, or becoming a member, youll unlock more benefits with every visit. Start earning and enjoy exclusive rewards today!
      </Typography>
    </Box>

    {/* Button Section */}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        minWidth: '200px' // Adjust for responsiveness
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        sx={{
          backgroundColor: '#ff6b6b', // Matches "Learn More" button color
          color: '#fff',
          textTransform: 'uppercase',
          paddingX: 4,
          '&:hover': {
            backgroundColor: '#e65555'
          }
        }}
      >
        Learn More
      </Button>
    </Box>
  </Box>
);

export default RewardsSection;
