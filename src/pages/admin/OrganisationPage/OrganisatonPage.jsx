import { Box, Grid, Typography, Button } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'

function OrganisatonPage({ organisationInfo, onFileUpload }) {
  const { name, phone, email, address, fileURL } = organisationInfo;
  return (
    <React.Fragment>
      <Grid container flexDirection='column' gap={2}>
        <Grid item>
          <Grid container flexDirection='row' justifyContent='space-between'>
            <Box>
              <Typography variant='h4'>Organisation</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justifyContent='center'>
            <Grid item>
              <Box width='45rem' height='30rem' sx={{ border: '1px solid grey' }}>
                <Grid container flexDirection='column' gap={2} alignItems='center'>
                  {
                    fileURL !== null ? (<Grid item sx={{ paddingTop: '4rem' }}>
                      <Box width='10rem'>
                        <img src={fileURL} alt='logo' width='100%' />
                      </Box>
                    </Grid>) :
                      <Grid item sx={{ paddingTop: '2rem' }}>
                        <Grid container alignItems='center' justifyContent='center' width='10rem' height='10rem' sx={{ border: '1px solid grey' }}>
                          <Grid item>
                            <Button variant='contained' component='label'>
                              Add Logo
                              <input hidden accept='image/*' type='file' onChange={onFileUpload}></input>
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                  }
                  <Grid item>
                    <span>
                      <Typography variant='h6'>Name: {name}</Typography>
                      <Typography variant='h6'>Phone: {phone}</Typography>
                      <Typography variant='h6'>Email: {email}</Typography>
                      <Typography variant='h6'>Address: {address}</Typography>
                    </span>
                  </Grid>
                  <Grid item>
                    <Stack direction='columns' gap={2}>
                      <Box alignItems='center'>
                        <Button variant='contained' component='label'>
                        <input hidden accept='image/*' type='file' onChange={onFileUpload}></input>
                          Edit Logo
                        </Button>
                      </Box>
                      <Box alignItems='center'>
                        <Button variant='contained'>Edit Details</Button>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default OrganisatonPage