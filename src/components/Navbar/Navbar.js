import React from 'react';
import {AppBar, Container, Toolbar} from '@mui/material';
import {Link} from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
  return (
      <AppBar color='primary' sx={{
          width: '100%',
          position: 'static'
      }}>
        <Toolbar>
          <Container disableGutters={true} sx={{display: 'flex', justifyContent: 'space-between'} }>
          <Link to={'/'}>Home</Link>
          <Link to={'/preferences'}><SettingsIcon /></Link>
          </Container>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar;
