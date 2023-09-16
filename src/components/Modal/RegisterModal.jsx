import { Alert, Backdrop, Box, Button, Container, Input, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ModalStyle from './ModalStyle'
import {useNavigate} from 'react-router-dom';

const RegisterModal = (props) => {
    const history = useNavigate();
    const classes = ModalStyle();
    const [open, setOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    const [submitInput, setSubmitInput] = useState({
        name: '',
        email: '',
        ville : '',
    });

    const [showProduct, setShowProduct] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleOpen = () => {setOpen(true)}
    const handleClose = () => {setOpen(false)}

    const handelLoading = () => {
        setLoading(true)
    }
    const stopLoading = () => {
        setLoading(false)
    }

    const handleSubmit = () => {
        setShowAlert(true);
        if(submitInput.city ==="" || submitInput.name === "" || submitInput.email === ""){
            setAlertMessage("Ohla, Prenez juste quelques secondes, 3 maximum.");
        }else{
            history('/gallery')
        }
    }

    const handleQuit = () => {
        setShowAlert(true);
        setAlertMessage("C'est juste du design, c'est rien !")
    }

    const handleInputChange = (e) => {
        setSubmitInput({...submitInput, [e.target.name] : e.target.value})
    }
    

  return (
    <div>
        <Modal 
        open={open}
        onClose={handleClose}
        >
            <Box  
            className= {classes.modalBox}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="auto">
                <Container className={classes.formContainer}>
                    <form>
                    <Typography id='modal-modal-title' sx={{fontSize: 30}}>
                        Hello-Form
                    </Typography>
                    <TextField
                            fullWidth
                            margin='dense' size='small'
                            name='name' id="name" label="Entrez votre nom" variant="outlined"
                            onChange={handleInputChange}
                            value={submitInput.name}
                        />
                    <TextField
                            fullWidth
                            margin='dense' size='small'
                            name='email' id="email" label="Votre e-mail" variant="outlined"
                            onChange={handleInputChange}
                            value={submitInput.email}
                        />
                        
                        <TextField fullWidth margin='dense'
                        size='small'
                        name='ville' id="ville" label="Votre ville" variant="outlined"
                        onChange={handleInputChange}
                        value={submitInput.city}
                        />
                        
                        {showAlert ? 
                            <Typography variant='h5' sx={{fontSize: 15,lineHeight: 1.6,}}>
                                {alertMessage}  <br />
                            </Typography> : ''}
                        <br/><br />
                        <Button variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleSubmit}
                        >
                            Valider
                        </Button>
                        <Button
                        sx={{marginLeft: 2}}
                        variant='outlined'
                            color="primary"
                            size="large"
                            className={classes.forgetButton}
                            onClick={handleQuit}>
                            Quitter
                        </Button>
                    </form>
                </Container>
            </Box>
        </Modal>
    </div>
  )
}

export default RegisterModal