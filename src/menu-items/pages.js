// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconBug } from '@tabler/icons-react';

// constant
const icons = {
  IconKey,
  IconBug
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: <FormattedMessage id="pages" />,
  caption: <FormattedMessage id="i" />,
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'help',
      title: <FormattedMessage id="help" />,
      type: 'collapse',
      icon: icons.IconBug
    },
    {
      id: 'settings',
      title: <FormattedMessage id="settings" />,
      type: 'collapse',
      icon: icons.IconBug
    }
  ]
};

export default pages;
