import React from 'react';
import { makeStyles } from '@mui/styles';

const HomeSkeletonStyle = makeStyles((theme) => ({
  welcomeTitle : {
    fontSize: 100,
    fontWeight: 800,
    lineHeight: 1,
    [theme.breakpoints.down('lg')] : {
      fontSize: 50,
    }
  },

  welcomeContainer :{
    color: '#2f2f2f',
  },

  enterBtn : {
    margin: '10px',
    backgroundColor: theme.palette.primary.light,
  }
}));

export default HomeSkeletonStyle;
