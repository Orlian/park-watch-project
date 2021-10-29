import React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import {Link} from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
  return (
      <AppBar color='primary' sx={{position: 'sticky'}}>
        <Toolbar>
          <Link to={'/'}>Home</Link>
          <Link to={'/preferences'}><SettingsIcon /></Link>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar;
