// material-ui
import Typography from '@mui/material/Typography';

// project imports
// import MainCard from 'components/ui-component/cards/MainCard';

import UserActivity from 'components/widget/Data/UserActivity';
import LatestMessages from 'components/widget/Data/LatestMessages';
import { gridSpacing } from 'store/constant';
import Grid from '@mui/material/Grid';
// ==============================|| SAMPLE PAGE ||============================== //

const Dashboard = () => (
  <>
    <Grid container spacing={gridSpacing} sx={{ mt: '90px' }}>
      <Grid item xs={12} md={7} lg={6}>
        <UserActivity />
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
        <LatestMessages />
      </Grid>
    </Grid>
  </>
);

export default Dashboard;
