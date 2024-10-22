'use client';
import { Noto_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { indigo, pink } from '@mui/material/colors';

const roboto = Noto_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const theme = createTheme({
    cssVariables: true,
  typography: {
    fontFamily: roboto.style.fontFamily,
  }, 
  palette: {
    primary: indigo,
    secondary: pink,
  },
  MuiButtonBase: {
    defaultProps: {
        disableRipple: true,
    },
},
MuiButtonGroup: {
    defaultProps: {
        disableRipple: true,
    },
},
  
});

export default theme;
