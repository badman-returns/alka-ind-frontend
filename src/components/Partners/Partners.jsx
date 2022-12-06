import { Stack, Typography, Box} from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function Partners() {
    return (
        <Box width="100%" height="60vh">
            <Stack direction='column' gap={4}>
                <Stack direction="column" gap={2} alignItems='center'>
                    <Box paddingTop='4rem'>
                        <Typography variant='h4'> PARTNERS</Typography>
                    </Box>
                </Stack>

                <Stack direction='row' gap={2} flexWrap={1} justifyContent='center'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Partners