import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

function Header({orgInfo}) {
    return (
        <Box sx={{ backgroundColor: '#000' }} width='100%' height='5vh'>
            <Stack direction='row' justifyContent='flex-end' gap={2} marginRight='1rem' padding='3px' color='#fff'>
                <Typography variant='subtitle1'><b>Reach us out here:  </b></Typography>
                <Stack direction='row' gap={1}>
                    <LocalPhoneIcon />
                    <Typography variant="subtitle1"><b>{orgInfo.phone}</b></Typography>
                </Stack>
                <Stack direction='row' gap={1}>
                    <MailIcon />
                    <Typography variant="subtitle1"><b>{orgInfo.email}</b></Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Header