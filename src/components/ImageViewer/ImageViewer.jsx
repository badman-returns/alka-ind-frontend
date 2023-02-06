import React from 'react'
import { DialogContent, Box } from '@mui/material'

function ImageViewer({ source }) {
    return (
        <React.Fragment>
            <DialogContent>
                 <img src={source} alt='carousel-preview' />
            </DialogContent>
        </React.Fragment>
    )
}

export default ImageViewer