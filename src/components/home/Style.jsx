import React from 'react';
import { makeStyles } from '@mui/styles';

const Style = makeStyles((theme) => ({
  welcomeTitle : {
    fontSize: 100,
    fontWeight: 800,
    lineHeight: 1,
    [theme.breakpoints.down('lg')] : {
      fontSize: 50,
    }
  },

  welcomeContainer :{
    color: '#7f7f7f',
  },

  enterBtn : {
    margin: '10px',
    color: '#7f7f7f',
  }
}));

export default Style;
