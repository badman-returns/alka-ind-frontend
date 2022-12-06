import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import RichEditor from '../../../components/RichEditor/RichEditor';
import 'react-toastify/dist/ReactToastify.css';

function AboutPage({handleOnChange, handleSubmit, content}) {
  return (
    <React.Fragment>
      <Grid container flexDirection='column' gap={2}>
        <Grid item>
          <Grid container flexDirection='row' justifyContent='space-between'>
            <Box>
              <Typography variant='h4'>About</Typography>
            </Box>
            <Box alignItems='center'>
              <Button variant='contained' onClick={handleSubmit}>Submit</Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <RichEditor value={content} handleOnChange={handleOnChange} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default AboutPage;