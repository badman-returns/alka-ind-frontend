import React, { useState, useEffect } from 'react'
import { Grid, DialogTitle, TextField, DialogContent, TextareaAutosize, DialogActions, Button, Box, Stack } from '@mui/material';

function PartnerForm({ partner, handleClose, submitPartnerData }) {
    const [name, setName] = useState(null);
    const [testimony, setTestimony] = useState(null);
    const [fileURL, setFileURL] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [logo, setLogo] = useState(null);


    const onFileUpload = (event) => {
        const file = event.target.files[0];
        setLogo(file);
        setSelectedFile(URL.createObjectURL(file));
    }

    const handlePartnerSubmit = (id) => {
        console.log(id);
        submitPartnerData(id, name, testimony, logo);
        handleClose();
    }

    useEffect(() => {
        if (partner !== null) {
            setName(partner.name);
            setTestimony(partner.testimony);
            setFileURL(partner.fileURL);
        }
    }, [])

    return (
        <>
            <DialogTitle>{partner ? 'Edit Partner' : 'Add Partner'}</DialogTitle>
            <Grid container justifyContent='center' alignItem='center'>
                {
                    selectedFile !== null && logo !== null ? (<Grid item sx={{ paddingTop: '4rem' }}>
                        <Stack direction='column' gap={1} justifyContent='center'>
                            <Box width='10rem'>
                                <img src={selectedFile} alt='logo' width='100%' />
                            </Box>
                            <Button variant='contained' component='label'>
                                Edit
                                <input hidden accept='image/*' type='file' onChange={onFileUpload} />
                            </Button>
                        </Stack>
                    </Grid>) : null
                }
                {
                    fileURL !== null && selectedFile == null ? (<Grid item sx={{ paddingTop: '4rem' }}>
                        <Stack direction='column' gap={1} justifyContent='center'>
                            <Box width='10rem'>
                                <img src={fileURL} alt='logo' width='100%' />
                            </Box>
                            <Button variant='contained' component='label'>
                                Edit
                                <input hidden accept='image/*' type='file' onChange={onFileUpload} />
                            </Button>
                        </Stack>

                    </Grid>) : null
                }
                {
                    fileURL == null && selectedFile == null ? (<Grid item sx={{ paddingTop: '2rem' }}>
                        <Grid container alignItems='center' justifyContent='center' width='10rem' height='10rem' sx={{ border: '1px solid grey' }}>
                            <Grid item>
                                <Button variant='contained' component='label'>
                                    Add Logo
                                    <input hidden accept='image/*' type='file' onChange={onFileUpload} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>) : null
                }
            </Grid>
            <DialogContent>
                <TextField
                    margin='dense'
                    id='name'
                    label='Name'
                    type='text'
                    fullWidth
                    variant='outlined'
                    defaultValue={partner ? partner.name : ''}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextareaAutosize
                    id='testimony'
                    placeholder={!partner ? 'Enter testimony' : partner.testimony}
                    defaultValue={partner ? testimony : ''}
                    onChange={(e) => setTestimony(e.target.value)}
                    style={{ width: 552 }}
                    minRows={12}
                />
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={handleClose} >Cancel</Button>
                <Button variant='contained' onClick={!partner ? () => handlePartnerSubmit() : () => handlePartnerSubmit(partner.id)}>Submit</Button>
            </DialogActions>
        </>
    )
}

export default PartnerForm