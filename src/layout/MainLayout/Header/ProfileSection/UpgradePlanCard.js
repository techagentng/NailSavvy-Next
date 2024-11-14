// material-ui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { ThemeMode } from 'config';

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => {
  const theme = useTheme();

  const cardSX = {
    content: '""',
    position: 'absolute',
    width: 200,
    height: 200,
    borderColor: 'warning.main'
  };

  return (
    <Card
      sx={{
        bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.800' : 'warning.light',
        my: 2,
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
          border: '19px solid ',
          borderRadius: '50%',
          top: '65px',
          right: '-150px',
          ...cardSX
        },
        '&:before': {
          border: '3px solid ',
          borderRadius: '50%',
          top: '145px',
          right: '-70px',
          ...cardSX
        }
      }}
    >
      <CardContent>
        {/* <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h4">Upgrade your plan</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color={theme.palette.mode === ThemeMode.DARK ? 'textSecondary' : 'grey.900'}
              sx={{ opacity: theme.palette.mode === ThemeMode.DARK ? 1 : 0.6 }}
            >
              70% discount for 1 years <br />
              subscriptions.
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row">
              <AnimateButton>
                <Link sx={{ textDecoration: 'none' }} href="https://links.codedthemes.com/hsqll" target="_blank">
                  <Button variant="contained" color="warning" sx={{ boxShadow: 'none' }}>
                    Go Premium
                  </Button>
                </Link>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid> */}
      </CardContent>
    </Card>
  );
};

export default UpgradePlanCard;
