import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
//MUI Components
import Box from '@mui/material/Box';
//Routes
import Home from "./routes/Home";
import Charts from "./routes/Charts";
import Table from "./routes/Table";
import Signin from "./routes/Signin";
import Settings from "./routes/Settings";
//Components
import ResponsiveDrawer from './components/ResponsiveDrawer';


const drawerWidth = 240;

function App() {
  return (
    <Router>
      <ResponsiveDrawer drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ 
          flexGrow: 1,
          ml: { xs: '0px', sm: `${drawerWidth}px`}, 
          p: 3, 
          width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}


export default App;
