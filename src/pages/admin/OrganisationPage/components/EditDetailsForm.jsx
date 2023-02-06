import { DialogActions, DialogTitle, DialogContent, TextField, Button } from '@mui/material'
import React, { useState } from 'react'

function EditDetailsForm({ organisationInfo, handleClose, generateFormData, submitOrganisationData }) {
    const [name, setName] = useState(organisationInfo.name);
    const [email, setEmail] = useState(organisationInfo.email);
    const [phone, setPhone] = useState(organisationInfo.phone);
    const [address, setAddress] = useState(organisationInfo.address);


    function handleSubmit() {
        let formData = generateFormData(name, phone, email, address);
        submitOrganisationData(formData);
        handleClose();
    }

    return (
        <>
            <DialogTitle>Edit Details</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    defaultValue={organisationInfo.name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="text"
                    fullWidth
                    variant="outlined"
                    defaultValue={organisationInfo.email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="phone"
                    label="Phone"
                    type="text"
                    fullWidth
                    variant="outlined"
                    defaultValue={organisationInfo.phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="address"
                    label="Address"
                    type="text"
                    fullWidth
                    variant="outlined"
                    defaultValue={organisationInfo.address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={handleClose} >Cancel</Button>
                <Button variant='contained' onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </>
    )
}

export default EditDetailsForm