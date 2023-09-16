import { Skeleton, alpha } from '@mui/material'
import React from 'react'

const FullScreenSkeleton = () => {
  return (
    <div>
        <Skeleton animation="wave" height='100vh' width="100%" sx={{background: alpha("#ffff" , 0.1), margin: 0}}/>
    </div>
  )
}

export default FullScreenSkeleton
