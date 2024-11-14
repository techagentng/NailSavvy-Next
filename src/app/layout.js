import PropTypes from 'prop-types';
import './globals.css';

// PROJECT IMPORTS
import ProviderWrapper from 'store/ProviderWrapper';

export const metadata = {
  title: 'React Material Admin Dashboard',
  description: 'Start your next React project. It build with Reactjs, Material-UI, Redux, and Hook for faster web development.'
};

// ==============================|| ROOT LAYOUT ||============================== //

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node
};
