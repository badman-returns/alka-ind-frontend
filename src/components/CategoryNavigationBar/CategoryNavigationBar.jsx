import React, { Fragment } from 'react'
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { CssBaseline } from '@mui/material';
import { Stack } from '@mui/system';


function CategoryNavigationBar() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar component="nav" position='static' sx={{ backgroundColor: '#000' }}>
        <Toolbar className='toolbar'>
         <Grid container justifyContent='center' alignItem='center'>
              <Grid item>
                <Stack direction='row' gap={6}>
                  <Button sx={{color:'#fff'}}><Typography variant='subtitle1'>Category</Typography></Button>
                  <Button sx={{color:'#fff'}}><Typography variant='subtitle1'>Category</Typography></Button>
                  <Button sx={{color:'#fff'}}><Typography variant='subtitle1'>Category</Typography></Button>
                  <Button sx={{color:'#fff'}}><Typography variant='subtitle1'>Category</Typography></Button>
                  <Button sx={{color:'#fff'}}><Typography variant='subtitle1'>Category</Typography></Button>
                  <Button sx={{color:'#fff'}}><Typography variant='subtitle1'>Category</Typography></Button>
                  <Button sx={{color:'#fff'}}><Typography variant='subtitle1'>Category</Typography></Button>
                </Stack>
              </Grid>
         </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default CategoryNavigationBar;