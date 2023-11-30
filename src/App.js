
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Overview from './Components/overview';
import SalesReport from './Components/salesReport';
import Inventory from './Components/inventory';
import Customer from './Components/customer';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const App = () => {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/customer">
              Customer
            </Button>
            <Button color="inherit" component={Link} to="/inventory">
              Inventory
            </Button>
            <Button color="inherit" component={Link} to="/sales-report">
              Sales Report
            </Button>
          </Toolbar>
        </AppBar>

      </Box>


      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/sales-report' element={<SalesReport />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/customer' element={<Customer />} />
      </Routes>

    </Router>
  );
}

export default App;
