import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar= () =>{ 
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to='accueilPage'>home </Link>
          </Typography>
          <Button color="inherit">
              <Link to='connectingPage'>connexion</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
            <Outlet/>
        </div>
    )
}

export default NavBar