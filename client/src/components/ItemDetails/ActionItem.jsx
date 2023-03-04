import { Box } from '@mui/material'
import React from 'react'



const ActionItem = ({ product }) => {
    return (
        <Box>
            <img src={product.detailUrl} />
        </Box>
    )
}

export default ActionItem