import React, { Fragment, useEffect, useState } from 'react'
import Style from  './Style'
import { Box, Button, Container, Fade, Icon, IconButton, Skeleton, Typography, Zoom } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import HomeSkeleton from '../Skeletons/HomeSkeleton';
import CircularLoader from '../Loaders/CircularLoader';
import RegisterModal from '../Modal/RegisterModal';
import Footer from '../Footer';

const MainSection = () => {

    const classes = Style();
    const [showSkeleton, setShowSkeleton] = useState(true);

    const [showRegisterModal, setShowRegisterModal] = useState(false);


    const clickEnterBtn = () => {
        setShowRegisterModal(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

  return (
    <div style={{backgroundColor: '#111111'}}>
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        className={classes.welcomeBox}>
        {showSkeleton === true ? <CircularLoader/> : 
        (
            <Fragment>
            <Fade in={true} timeout={5000}>
                <Zoom in={true} style={{transitionDelay:'2500ms'}}>
                    <Container className={classes.welcomeContainer}>
                        <Typography className={classes.welcomeTitle} variant='d'>
                            Bienvenue dans GALAX
                        </Typography>
                        <br />
                        <Typography className={classes.welcomeDesc} variant='h4'>
                            Votre nouvelle galerie de photo bien stylée.
                        </Typography>
                        <br />
                        <Button onClick={clickEnterBtn} variant='outlined' sx={{margin: 2, padding: 1,  color: '#7f7f7f' }} className={classes.enterBtn} >
                            Entrer dans la galaxie
                            <ArrowCircleRightRoundedIcon sx={{ fontSize: 50, color: '#7f7f7f' }}/>
                        </Button>
                        <Footer/>
                    </Container>
                </Zoom>
            </Fade>
                {showRegisterModal ? <RegisterModal/> : ''}
            </Fragment>
        )}
        </Box>
    </div>
  )
}

export default MainSection