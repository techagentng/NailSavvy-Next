// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import { ThemeMode } from 'config';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Berry" width="100" />
     *
     */
    <svg
      width="90"
      height="120"
      viewBox="0 0 131 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/no-unknown-property
      // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect width="100" height="131" fill="url(#pattern0_1_2)" />
      <defs>
        <pattern id="pattern0_1_2" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_2" transform="matrix(0.0131579 0 0 0.01064 0 -0.00540123)" />
        </pattern>
        <image
          id="image0_1_2"
          width="76"
          height="95"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Logo;
