import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
//MUI Components
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
//Routes
import Home from "./routes/Home";
import Charts from "./routes/Charts";
import Data from "./routes/Data";
import Signin from "./routes/Signin";
import Settings from "./routes/Settings";
//Components
import Header from './components/Header';
import Navigator from './components/Navigator';
import { theme } from './theme';


const drawerWidth = 240;

function NoMatch() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <h3>Not ready yet.</h3>
    </div>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <CssBaseline />
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
            {isSmUp ? null : (
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              />
            )}

            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              sx={{ display: { sm: 'block', xs: 'none' } }}
            />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <Box
              component="main"
              sx={{ flex: 1, bgcolor: 'eaeff1', overflow: 'auto' }}
            >
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/charts">
                  <Charts />
                </Route>
                <Route path="/data">
                  <Data />
                </Route>
                <Route path="/signin">
                  <Signin />
                </Route>
                <Route path="/setup">
                  <Settings />
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}


export default App;
