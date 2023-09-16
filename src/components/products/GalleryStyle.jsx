import { makeStyles } from '@mui/styles'
import React from 'react'

const GalleryStyle = makeStyles((theme)=> ({
    galleryDiv: {
        backgroundColor: theme.palette.primary.main,
    },
    galleryBox : {
        opacity: 0,
        transform: 'scale(0.1)',
        animation: `$bounce 1s ${theme.transitions.easing.easeInOut}`,
        animationFillMode: 'both',
        // overflowY: 'hidden',
    },
    '@keyframes zoomIn': {
        '0%': {
          transform: 'scale(0)',
        },
        '100%': {
          transform: 'scale(1)',
        },
      },
}));
export default GalleryStyle