import React from 'react'
import { DialogContent, Box } from '@mui/material'

function ImageViewer({ source }) {
    return (
        <React.Fragment>
            <DialogContent>
                <Box>
                    <img src={source} alt='carousel-preview' />
                </Box>
            </DialogContent>
        </React.Fragment>
    )
}

export default ImageViewer