import React from 'react'
import { Dialog } from '@mui/material';

function BaseDialog({ renderContent, handleClose, open, fullWidth }) {
    return (
        <Dialog onClose={handleClose} open={open} maxWidth={fullWidth}>
            {renderContent()}
        </Dialog>
    )
}

export default BaseDialog