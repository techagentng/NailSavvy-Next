// import { Box, Button, Container, Grid, Typography, styled, useTheme } from '@mui/material';
// import { IconCircleCheckFilled } from '@tabler/icons-react';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Image from 'next/image';
// // Assets
// import Dashboard from 'assets/images/landing/dashboard.png';
// import FadeInWhenVisible from './Animation2';

// const Lists = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: theme.spacing(2),
//   [theme.breakpoints.up('sm')]: {
//     flexDirection: 'row'
//   }
// }));

// const Analytics = () => {
//   const theme = useTheme();
//   const listSX = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.7rem',
//     padding: '10px 0',
//     fontSize: '1rem',
//     color: theme.palette.grey[900],
//     svg: { color: '#17a877' }
//   };

//   const ListItem = ({ children }) => (
//     <Typography sx={listSX}>
//       <IconCircleCheckFilled size={20} /> {children}
//     </Typography>
//   );

//   return (
//     <Container sx={{ padding: theme.spacing(4), maxWidth: 'lg' }}>
//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={6}>
//           <Typography variant="h2" sx={{ marginBottom: theme.spacing(2) }}>
//             Citizen X Dashboard: Incident Reports & Analytics
//           </Typography>
//           <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
//             Explore our data-driven dashboard for insights into citizen engagements and governance.
//           </Typography>
//           <Box sx={{ marginTop: theme.spacing(3) }}>
//             <Button variant="contained" color="primary" size="large" sx={{ textTransform: 'uppercase', paddingX: 4 }}>
//               Explore Dashboard
//             </Button>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Image
//             src="/path-to-dashboard-image.jpg"
//             alt="Dashboard"
//             layout="responsive"
//             width={500}
//             height={300}
//             style={{ borderRadius: '16px' }}
//           />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Analytics;
