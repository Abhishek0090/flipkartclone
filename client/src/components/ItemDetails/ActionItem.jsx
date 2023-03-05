import { Box, Button } from '@mui/material'
import React from 'react'



const ActionItem = ({ product }) => {
    return (
        <Box>
            <img src={product.detailUrl} />
            <Button>Add to Cart</Button>
            <Button>Buy Now</Button>
        </Box>
    )
}

export default ActionItem