import React from 'react';
import Auxs from '../../hoc/auxs';
import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <Auxs>
            <div>Toolbar, Sidedrawer, Backdrop</div>
            <main className={ classes.Content }>
                { props.children }
            </main>
        </Auxs>
    )
    
}

export default Layout;