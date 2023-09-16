import makeStyles from '@mui/styles/makeStyles'
import React from 'react'

const ModalStyle = makeStyles((theme) => ({
  modalBox: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '500px',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #1c1c1c',
    boxShadow: 24,
    borderRadius: 20,
    color: '#2f2f2f',
    [theme.breakpoints.down('lg')] : {
      width: '350px',
    }
  },

  formContainer: {
    padding: theme.spacing(3),
  }
}))

export default ModalStyle