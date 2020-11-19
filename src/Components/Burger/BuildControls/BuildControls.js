import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Price : <strong>{props.price.toFixed(2)}</strong></p>

        {controls.map(ctrl => {
        return <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientsadded(ctrl.type)}
        removed={() => props.ingredientsremoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}/>
        })}
    
    <button 
    className={classes.OrderButton}
    disabled={!props.purchaseable}
    onClick={props.ordered}>ORDER NOW</button>
    </div>

)

export default buildControls;