import React, { Fragment } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { CssBaseline, Grid, Stack } from '@mui/material';
import './AppNavigationBar.css';


function AppNavigationBar({ orgInfo }) {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar component="nav" position='static' sx={{ backgroundColor: '#fcfcfc', }}>
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
              <Box width='5rem' padding='1rem'>
                <img src={orgInfo.fileURL} alt='logo' width='100%' />
              </Box>
            </Grid>
            <Grid item>
            <Grid container justifyContent='center' alignItem='center'>
              <Grid item>
                <Stack direction='row' gap={6}>
                  <Button sx={{ color: '#000' }}><Typography variant='subtitle1'>About</Typography></Button>
                  <Button sx={{ color: '#000' }}><Typography variant='subtitle1'>Products</Typography></Button>
                  <Button sx={{ color: '#000' }}><Typography variant='subtitle1'>Categories</Typography></Button>
                  <Button sx={{ color: '#000' }}><Typography variant='subtitle1'>Enquiry</Typography></Button>
                  <Button sx={{ color: '#000' }}><Typography variant='subtitle1'>Contact </Typography></Button>
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