import React, { Component } from 'react';
import Auxs from '../../hoc/auxs';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = () => {
        this.setState( (prevState) => {
            return { showSideDrawer: !this.state.showSideDrawer }
        });
    }

    hamburgerClickHandler = () => {
        this.setState({
            showSideDrawer: true
        })
    }

    render() {
        return (
            <Auxs>
                <Toolbar hamburgerclick={this.hamburgerClickHandler}/>

                <SideDraw 
                 open={this.state.showSideDrawer} 
                 closed={this.sideDrawerClosedHandler}/>

                <main className={ classes.Content }>
                    { this.props.children }
                </main>
            </Auxs>
        )
    }
        
} 

export default Layout;