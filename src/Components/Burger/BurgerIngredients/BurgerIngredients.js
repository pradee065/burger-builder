import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredients.module.css';

class BurgerIngredients extends Component {
    
    // static getDerivedStateFromProps (props, state){
    //     console.log('[app.js] is getDerived state of updated lifecycle'); 
    //     return this.state;
    // }

    shouldComponentUpdate(nextprops, nextstate){
        console.log('[app.js] is shouldcomponentupdate lifecycle'); 
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, nextprops){
        console.log('[app.js] is getsnapshotbeforeupdate lifecycle'); 
        return null;
    }

    componentDidUpdate(prevprops, prevstate, snapshots){
        console.log('[app.js] is component will lifecycle'); 
        console.log(snapshots);
    }

    render(){
    console.log('[app.js] is updation lifecycle rendered here');    
    let ingredients = null;


    switch(this.props.type) {
        case ('bread-bottom') : 
        ingredients = <div className={classes.BreadBottom}></div>;
        break;

        case ('bread-top') : 
        ingredients = (
        <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>  
            <div className={classes.Seeds2}></div>  
        </div>
        );
        break;

        case ('meat') : 
        ingredients = <div className={classes.Meat}></div>;
        break;

        case ('cheese') : 
        ingredients = <div className={classes.Cheese}></div>;
        break;

        case ('salad') : 
        ingredients = <div className={classes.Salad}></div>;
        break;

        case ('bacon') : 
        ingredients = <div className={classes.Bacon}></div>;
        break;

        default : 
        ingredients = null

    }

    return ingredients;
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients;