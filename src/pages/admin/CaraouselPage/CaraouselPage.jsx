import React, { useState } from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ImageViewer from '../../../components/ImageViewer/ImageViewer';
import BaseDialog from '../../../components/BaseDialog/BaseDialog';

function CaraouselPage({ carousels, onFileUpload, removeCarousel }) {
  const [currentFileURL, setCurrentFileURL] = useState(null);
  const [enablePreview, setEnablePreview] = useState(false);

  const onPreview = (url) => {
    setCurrentFileURL(url);
    setEnablePreview(true);
  }

  const closePreview =()=> {
    setEnablePreview(false);
  }

  const renderImagePreview = () => {
    return <ImageViewer source={currentFileURL} />
  }

  return (
    <React.Fragment>
      <Grid container flexDirection='column' gap={2}>
        <Grid item>
          <Grid container flexDirection='row' justifyContent='space-between'>
            <Box>
              <Typography variant='h4'>Carousel Page</Typography>
            </Box>
            <Box alignItems='center'>
              <Button variant='contained' component='label'>
                Add Carousel
                <input hidden accept='image/*' type='file' onChange={onFileUpload}></input>
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          {carousels && (
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 650 }} aria-label="carousel table" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell><b>Id</b></TableCell>
                    <TableCell align="center"><b>File Name</b></TableCell>
                    <TableCell align="center"><b>Created By</b></TableCell>
                    <TableCell align="center"><b>Created On</b></TableCell>
                    <TableCell align="center"><b>Actions</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {carousels.map((carousel) => (
                    <TableRow
                      key={carousel.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {carousel.id}
                      </TableCell>
                      <TableCell align="center">{carousel.fileName}</TableCell>
                      <TableCell align="center">{carousel.createdBy}</TableCell>
                      <TableCell align="center">{carousel.createdOn}</TableCell>
                      <TableCell align="center">
                        <Stack direction='row' gap={1} justifyContent='center'>
                          <Button variant='contained' color='primary' sx={{ color: '#fff' }} onClick={() => onPreview(carousel.fileURL)}>Preview</Button>
                          <Button variant='contained' color='danger' sx={{ color: '#fff' }} onClick={() => removeCarousel(carousel.id)}>Delete</Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
      {/* Dialog */}
      <BaseDialog renderContent={renderImagePreview} handleClose={closePreview} open={enablePreview} fullWidth={true}/>
    </React.Fragment>

  )
}

export default CaraouselPage