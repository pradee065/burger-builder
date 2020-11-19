import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => {
   return( 
    <div 
        className={classes.Modal}
        style={{ 
           transform : props.show ? 'translateY(0)' : 'traslateY(-100vh)',
           opacity: props.show ? '1' : '0'
       }}>
        { props.children }
    </div>
    )
}

export default modal;