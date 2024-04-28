import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Grid } from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CottageIcon from '@mui/icons-material/Cottage';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const savedList = () =>{
navigate('/saved-items')
  }
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: 'white', color : 'orange' }}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={10} style={{display: 'flex' , alignItems:'center'}}>
            <CottageIcon />
            <Typography variant="h6" component="h6" style={{ marginTop: '5px' }}>
               House Hunt
              </Typography>
             
            </Grid>
            <Grid item xs={1} container>
              <Button color="inherit" variant="outlined" startIcon={<FavoriteIcon />} onClick={savedList}>Saved</Button>
            </Grid>
            <Grid item xs={1} container  alignItems="center">
                <Avatar alt="Avatar" src="/avatar.jpg" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
