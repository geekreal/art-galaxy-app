import React from 'react'
import Style from './home/Style'

const Footer = () => {
    const classes = Style();
  return (
    <div
        style={{
        // position :"absolute",
        bottom: "50px",
        // left: "42%",
        color: '#7f7f7f' ,}}
        className={classes.welcomeBox}>
        @by KED - Kossi E. DOTSEY
    </div>
  )
}

export default Footer