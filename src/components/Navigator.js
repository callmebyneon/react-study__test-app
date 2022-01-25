import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
import { Logo } from '../settings/logo';
import { categories } from '../settings/categories';


function Copyright() {
  const CopyrightBox = styled.div`
    padding: 1rem;
    & a {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: underline;
    }
  `;

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
        <Link to="/">
          This Website
        </Link>{' '}
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
  py: 2,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <Link to="/">
          <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
            <Logo sx={{ height: 36, width: 36, mr: 2 }} />
            Name
          </ListItem>
        </Link>
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
            {children.map(({ id: childId, href, icon, active }) => (
              <Link to={href}>
                <ListItem disablePadding key={childId}>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
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