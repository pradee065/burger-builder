import React from 'react';
import Auxs from '../../../hoc/auxs';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map((igKey) => {
    return (
    <li key={igKey}> <span style={{textTransform: "capitalize"}}>{igKey}</span> : {props.ingredients[igKey]}</li>
    )
    });
    return (
        <Auxs>
            <h3>Your Order</h3>
            <p>A delicios burger with the following ingredients :</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue with checkout?</p>
        </Auxs>
    )

}

export default orderSummary;