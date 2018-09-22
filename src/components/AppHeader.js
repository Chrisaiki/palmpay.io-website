import React from 'react';
import { Link } from 'react-router-dom';

//Material UI Components
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import AppLogo from '../assets/img/header/logo.png';

/**
 * The header of some pages: MerchantsPage, AmbassadorsPage and NotFoundPage.
 */
function AppHeader() {
  return (
    <AppBar position="static" color="inherit" style={{backgroundColor: '#138F52'}}>
      <Toolbar>
        <Typography style={{margin: '0 auto'}} variant="title" color="inherit">
          <Link to="/">
            <img src={AppLogo} className="app-book-menu-remove-icon" alt="Palmpay logo" />
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
