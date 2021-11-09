import React from 'react';
import {Container, createTheme, responsiveFontSizes, ThemeProvider, Typography} from '@mui/material';


let theme = createTheme();
theme = responsiveFontSizes(theme);
const PreferencesPage = () => {
  return (
      <ThemeProvider theme={theme}>
          <Container disableGutters={true}>
            <Typography variant='h2'>I am the preferences page title, ahoy!</Typography>
          </Container>
      </ThemeProvider>
  )
}

export default PreferencesPage;
