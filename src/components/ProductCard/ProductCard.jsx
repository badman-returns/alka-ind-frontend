import React from 'react'
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

function ProductCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Product
                </Typography>
                <Typography variant="body2" color="#000">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maiores aut repudiandae alias dolorem quae vel molestiae dolores et. Possimus error architecto, cumque suscipit alias soluta temporibus animi et eveniet.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Details</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;