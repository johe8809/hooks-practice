import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: indigo,
  },
  typography: {
    useNextVariants: true,
  },
});

export default (Component) => {
  const WithRoot = (props) => {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  };

  return WithRoot;
};
