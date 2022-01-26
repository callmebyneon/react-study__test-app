import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { theme } from '../theme';
//MUI Components
import AppBar from '@mui/material/AppBar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
//Icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';


function Header(props) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={0} alignItems="center">
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
            <Grid item sx={{ m: 1 }}>
              <Tooltip title="Home">
                <NavLink to="/" style={{ color: 'inherit' }}>
                  <ButtonBase 
                    sx={{
                      p: 1,
                      alignItems: 'center',
                      borderRadius: '8px',
                      transition: 'all .2s ease-in-out',
                      backgroundColor: theme.palette.primary.light,
                      color: theme.palette.primary.text,
                    }}
                  >
                    <HomeIcon color="inherit" fontSize='small' />
                  </ButtonBase>
                </NavLink>
              </Tooltip>
            </Grid>
            <Grid item sx={{ m: 1 }}>
              <Tooltip title="Set up">
                <NavLink to="/setup" style={{ color: 'inherit' }}>
                  <ButtonBase 
                    sx={{
                      p: 1,
                      alignItems: 'center',
                      borderRadius: '8px',
                      transition: 'all .2s ease-in-out',
                      backgroundColor: theme.palette.primary.light,
                      color: theme.palette.primary.text,
                    }}
                  >
                    <SettingsIcon color="inherit" fontSize='small' />
                  </ButtonBase>
                </NavLink>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Dashboard
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar 
        component="div" 
        position="static" 
        elevation={0} 
        sx={{ 
          zIndex: 0,
        }}
      >
        <Toolbar>
          <Breadcrumbs aria-label="breadcrumb" textColor="inherit">
            <Typography color={theme.palette.neutral[400]}>Monitor</Typography>
            <Typography color={theme.palette.neutral[300]}>Dashboard</Typography>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;