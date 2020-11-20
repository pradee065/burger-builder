import React, { Component } from 'react';
import classes from './Modal.module.css';
import Auxs from '../../../hoc/auxs';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate (nextProps, prevProps){
        return nextProps.show !== this.props.show;
    }

    render(){
        return(
            <Auxs>
    <Backdrop show={this.props.show} clicked={this.props.modalclosed}/>
    <div 
        className={classes.Modal}
        style={{ 
           transform : this.props.show ? 'translateY(0)' : 'traslateY(-100vh)',
           opacity: this.props.show ? '1' : '0'
       }}>
        { this.props.children }
    </div>
    </Auxs>
        )
    }
} 

export default Modal;