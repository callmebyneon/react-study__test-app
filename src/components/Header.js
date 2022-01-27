import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { theme } from '../theme';
//MUI Components
import AppBar from '@mui/material/AppBar';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
//Icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';


const itemBase = {
  p: 1,
  alignItems: 'center',
  borderRadius: '8px',
  transition: 'all .2s ease-in-out',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.text,
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.2)',
  },
};

function Header(props) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="static" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Tooltip title="Home">
                <NavLink to="/" style={{ color: 'inherit' }}>
                  <ButtonBase 
                    sx={itemBase}
                  >
                    <HomeIcon color="inherit" />
                  </ButtonBase>
                </NavLink>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Set up">
                <NavLink to="/setup" style={{ color: 'inherit' }}>
                  <ButtonBase 
                    sx={itemBase}
                  >
                    <SettingsIcon color="inherit" />
                  </ButtonBase>
                </NavLink>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;