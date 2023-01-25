import React, { Fragment } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { CssBaseline, Grid, Stack } from '@mui/material';
import {Link} from 'react-router-dom'
import './AppNavigationBar.css';


function AppNavigationBar({ orgInfo }) {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar component="nav" position='sticky' sx={{ backgroundColor: '#fcfcfc', top:'2.4rem' }}>
        <Toolbar className='toolbar'>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                // onClick={handleDrawerToggle} 
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Stack direction='row'>
                <Box width='5rem' padding='1rem'>
                  <img src={orgInfo.fileURL} alt='logo' width='100%' />
                </Box>
                <Box paddingTop='1.4rem'>  
                  <Typography variant='h5' color='#000'><b>ALKA INDUSTRIES</b></Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Grid container justifyContent='center' alignItem='center'>
                <Grid item>
                  <Stack direction='row' gap={6} >
                    <Link to={'/about'}  style={{ textDecoration:'none' }}>
                    <Button sx={{ color: '#000' }}><Typography variant='subtitle1'>About</Typography></Button>
                    </Link>
                    <Link to={'/products'} style={{ textDecoration:'none' }}>
                    <Button sx={{ color: '#000' }}><Typography variant='subtitle1'>Products</Typography></Button>
                    </Link>
                    <Link style={{ textDecoration:'none' }}>
                    <Button sx={{ color: '#000' }}><Typography variant='subtitle1'>Categories</Typography></Button>
                    </Link>
                    <Link to={'/enquiry'} style={{ textDecoration:'none' }}>
                    <Button sx={{ color: '#000' }}><Typography variant='subtitle1'>Enquiry</Typography></Button>
                    </Link>
                    <Link to={'/contact'} style={{ textDecoration:'none' }}>
                    <Button sx={{ color: '#000' }}><Typography variant='subtitle1'>Contact </Typography></Button>
                    </Link>

                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default AppNavigationBar;