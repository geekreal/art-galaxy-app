import React from 'react'
import { createTheme } from '@mui/material'

const UserTheme = createTheme({

    palette: {
    primary: {
      main: '#2b2b2b',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#2f2f2f',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },

})
export default UserTheme
