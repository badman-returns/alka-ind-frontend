import React from 'react'
import { Dialog } from '@mui/material';

function BaseDialog({ renderContent, handleClose, open }) {
    return (
        <Dialog onClose={handleClose} open={open}>
            {renderContent()}
        </Dialog>
    )
}

export default BaseDialog