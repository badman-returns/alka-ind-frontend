import React from 'react'
import { Backdrop, CircularProgress, Box } from '@mui/material';

const Loader = () => {
    return (
        <div>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true} >
            <Box sx={{ display: 'flex'}}>
                <CircularProgress sx={{color:'#fff'}}/>
            </Box>
            </Backdrop>
        </div>
    )
};

export default Loader;