import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxs from '../../../hoc/auxs';

const sidedrawer = (props) => {
    let attachClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Auxs>
        <Backdrop show={props.open} clicked={props.closed}/>

        <div className={attachClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <Navigationitems />
            </nav>

        </div>
        </Auxs>
    )
}

export default sidedrawer;