import { Button, Container, Skeleton, Slide, Typography, alpha } from '@mui/material'
import Style from './HomeSkeletonStyle';
import React from 'react'

const HomeSkeleton = () => {
    const classes  = Style()
  return (
    <div>
        <Slide in={true} direction='up' mountOnEnter unmountOnExit appear={false}>
            <div>
                <Container className={classes.welcomeContainer} sx={{width: '100vh'}}>
                    <Typography  variant='d'>
                        <Skeleton animation="wave" height={80} width="100%" sx={{background: alpha("#ffff" , 0.1)}}/>
                    </Typography>
                    <br />
                    <Typography className={classes.welcomeDesc} variant='h4'>
                        <Skeleton animation="wave" height={40} width="80%" sx={{background: alpha("#ffff" , 0.1)}}/>
                    </Typography>
                    <br />
                    <Button sx={{margin: 2, padding: 1}} className={classes.enterBtn}>
                        <Typography className={classes.welcomeDesc} variant='h4'>
                            <Skeleton animation="wave" height={50} width="00%" sx={{background: alpha("#ffff" , 0.1)}}/>
                        </Typography>
                        <Skeleton animation="wave" height={50} width="100%" sx={{background: alpha("#ffff" , 0.1)}}/>
                    </Button>
                </Container>
            </div>
        </Slide>
    </div>
  )
}

export default HomeSkeleton