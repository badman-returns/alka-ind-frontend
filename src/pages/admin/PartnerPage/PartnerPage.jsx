import React, { useState } from 'react'
import { Button, Grid, Stack, Typography, Box, Table, TableContainer, TableBody, TableHead, TableRow, Paper, TableCell } from '@mui/material';
import BaseDialog from '../../../components/BaseDialog/BaseDialog';
import PartnerForm from './components/PartnerForm';

function PartnerPage({ partners, deletePartner, submitPartnerData }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  const enableDisableDialog = (partner) => {
    setSelectedPartner(partner);
    setOpenDialog(!openDialog);
  }

  const insertPartner = () => {
    setSelectedPartner(null);
    setOpenDialog(!openDialog);
  }

  const partnerForm = () => {
    return <PartnerForm partner={selectedPartner} handleClose={enableDisableDialog} submitPartnerData={submitPartnerData}/>
  }

  return (
    <React.Fragment>
      <Grid container flexDirection='column' gap={2}>
        <Grid item>
          <Grid container flexDirection='row' justifyContent='space-between'>
            <Box>
              <Typography variant='h4'>Partner Page</Typography>
            </Box>
            <Box alignItems='center'>
              <Button variant='contained' component='label' onClick={insertPartner}>
                Add Partner
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          {partners && (
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 650 }} aria-label="carousel table" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><b>Name</b></TableCell>
                    <TableCell align="center"><b>Created On</b></TableCell>
                    <TableCell align="center"><b>Actions</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {partners.map((partner) => (
                    <TableRow
                      key={partner.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{partner.name}</TableCell>
                      <TableCell align="center">{partner.createdOn}</TableCell>
                      <TableCell align="center">
                        <Stack direction='row' gap={1} justifyContent='center'>
                          <Button variant='contained' color='primary' sx={{ color: '#fff' }} onClick={() => enableDisableDialog(partner)}>Preview / Edit</Button>
                          <Button variant='contained' color='danger' sx={{ color: '#fff' }} onClick={() => deletePartner(partner.id)}>Delete</Button>
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
      <BaseDialog renderContent={partnerForm} handleClose={enableDisableDialog} open={openDialog} />
    </React.Fragment>
  )
}

export default PartnerPage