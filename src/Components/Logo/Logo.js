import React from 'react';
import Burgerlogo  from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css'

const logo = () => (
    <div className={classes.Logo}>
        <img src={Burgerlogo} alt="burgerlogo"/>
    </div>
)

export default logo;