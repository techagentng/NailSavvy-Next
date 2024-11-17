import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-import
import { ThemeMode } from 'config';

// assets
const User1 = '/assets/images/users/user-round.svg';

// styles
const ListItemWrapper = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'primary.light',
        },
      }}
    >
      {children}
    </Box>
  );
};

ListItemWrapper.propTypes = {
  children: PropTypes.node,
};

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => (
  <List
    sx={{
      width: '100%',
      maxWidth: { xs: 390, md: 600 },
      py: 0,
    }}
  >
    <ListItemWrapper>
      <ListItem alignItems="flex-start" disablePadding>
        <ListItemAvatar>
          {/* <Avatar alt="John Doe" src={User1} /> */}
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="body1" fontWeight="bold">
              John Doe
            </Typography>
          }
          secondary={
            <Box mt={1} sx={{ maxWidth: '75%' }}> {/* Reducing the width */}
              <Typography variant="body2" color="text.secondary">
                This is a description text that provides more details about the notification.
              </Typography>
            </Box>
          }
        />
        <ListItemSecondaryAction>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 2 }}>
            2 hours ago
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </ListItemWrapper>
  </List>
);

export default NotificationList;
