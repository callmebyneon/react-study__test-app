import * as React from 'react';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

// MUI Components
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// Icons
import { IconChevronRight } from '@tabler/icons';

import { HeatMapChart, BarChart, RadialBarChart } from '../components/SampleChart'


const PaperItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  height: '100%',
  padding: theme.spacing(1),
  textlign: 'left',
  bgcolor: theme.palette.background.paper,
}));

const IconBadge = styled(Avatar)(({ theme }) => ({
  padding: theme.spacing(1),
  marginLeft: 'auto',
  alignItems: 'center',
  borderRadius: '8px',
  transition: 'all .2s ease-in-out',
  backgroundColor: theme.palette.neutral[100],
  opacity: '0.8',
  '& svg': {
    color: theme.palette.secondary.main,
  }
}));


export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <PaperItem sx={{ bgcolor: 'secondary.light', '& h2': { pl: 1, color: '#fff' } }}>
            <NavLink to="/dashboard">
              <h2>Dashboard</h2>
              <IconBadge>
                <IconChevronRight />
              </IconBadge>
            </NavLink>
          </PaperItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <PaperItem sx={{ bgcolor: 'secondary.light', '& h2': { pl: 1, color: '#fff' } }}>
            <NavLink to="/charts">
              <h2>Charts</h2>
              <IconBadge>
                <IconChevronRight />
              </IconBadge>
            </NavLink>
          </PaperItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <PaperItem sx={{ bgcolor: 'info.light', '& h2': { pl: 1, color: '#fff' } }}>
            <NavLink to="/setup">
              <h2>Set Up</h2>
              <IconBadge>
                <IconChevronRight color="gray" />
              </IconBadge>
            </NavLink>
          </PaperItem>
        </Grid>
        <Grid item xs={12} md={8}>
          <PaperItem>
            <BarChart width={746} height={320} />
          </PaperItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <PaperItem>
            <RadialBarChart height={350} />
          </PaperItem>
        </Grid>
        <Grid item xs={12}>
          <PaperItem>
            <HeatMapChart height={400} />
          </PaperItem>
        </Grid>
      </Grid>
    </Box>
  );
}