import colors from './color';
import fontSizes from './fontSizes';

const theme = {
  colors,
  fontSizes,

  typography: {
    fonts: {
      primary: 'Poppins',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      normal: '1.5',
      dense: '1.25',
      relaxed: '1.75',
    },
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },

  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '50%',
  },

  shadows: {
    sm: '0px 1px 3px rgba(0, 0, 0, 0.12)',
    md: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0px 10px 20px rgba(0, 0, 0, 0.15)',
    xl: '0px 20px 40px rgba(0, 0, 0, 0.2)',
  },
};

export default theme;
