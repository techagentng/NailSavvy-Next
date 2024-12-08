// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconHome } from '@tabler/icons-react';

const icons = {
  IconDashboard,
  IconDeviceAnalytics
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'dashboard',
  title: <FormattedMessage id="dashboard" />,
  icon: icons.IconDashboard,
  type: 'group',
  children: [
    {
      id: 'default',
      title: <FormattedMessage id="Home" />,
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'appointment',
      title: <FormattedMessage id="Appointent" />,
      type: 'item',
      url: '/appointment',
      icon: icons.IconDeviceAnalytics,
      breadcrumbs: false
    },
    {
      id: 'membership',
      title: <FormattedMessage id="Membership" />,
      type: 'item',
      url: '/membership',
      icon: icons.IconDeviceAnalytics,
      breadcrumbs: true
    },
    {
      id: 'wallet',
      title: <FormattedMessage id="Wallet" />,
      type: 'item',
      url: '/wallet',
      icon: icons.IconDeviceAnalytics,
      breadcrumbs: true
    }
  ]
};

export default dashboard;
