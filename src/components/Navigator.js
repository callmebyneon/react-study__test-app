import React from 'react';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
//MUI Components
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//Components
import { Logo } from '../settings/logo-elf';
import { Logo as LogoText } from '../settings/logo-text';
import { categories } from '../settings/categories';


function Copyright() {
  const CopyrightBox = styled('div')({
    padding: '1rem',
    '& a': {
      color: 'rgba(255, 255, 255, 0.5)',
      textDecoration: 'underline',
    },
    '& a:hover': {
      textDecoration: 'none',
    }
  });

  return (
    <CopyrightBox>
      <Typography 
        variant="body2" 
        align="center" 
        sx={{ 
          color: 'rgba(255, 255, 255, 0.3)'
        }}
      >
        {'Copyright © '}
        <NavLink to="/">
          This Website
        </NavLink>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </CopyrightBox>
  );
}


const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.1)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <NavLink to="/">
          <ListItem sx={{ ...item, ...itemCategory, fontSize: 24, color: '#fff', fontWeight: 700 }}>
            <Logo sx={{ height: 36, width: 36, mr: 1, ml: 4 }} />
            <LogoText sx={{ height: 60, width: 60 }} />
          </ListItem>
        </NavLink>
        {categories.map(({ id, children }) => (
          <Box 
            key={id} 
            sx={{ 
              bgcolor: '#101F33', 
              '& a': { textDecoration: 'none' },
              '& .Mui-selected': { bgcolor: 'rgba(255, 255, 255, 0.4)' },
              '& .Mui-selected>div:first-child': { color: '#aab0bd' }
            }}
          >
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, href, icon }) => (
              <NavLink 
                to={href} 
                isActive={(match, location) => {
                  if (!match) {
                    return false;
                  }
                  
                  return match.isExact;
                }}
                activeClassName='selected'
              >
                <ListItem disablePadding key={childId}>
                  <ListItemButton sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
      <Box component="footer" sx={{ mt:'auto' }}>
        <Copyright />
      </Box>
    </Drawer>
  );
}