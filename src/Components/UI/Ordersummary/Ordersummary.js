import React, { Component } from 'react';
import Auxs from '../../../hoc/auxs';
import Button from '../../UI/Button/Button';

class orderSummary extends Component {

    componentWillUpdate (){
        console.log('Order Summary is updated here!!');
    }

    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map((igKey) => {
        return (
            <li key={igKey}> <span style={{textTransform: "capitalize"}}>{igKey}</span> : {this.props.ingredients[igKey]}</li>
        )
        });
        return (
            <Auxs>
            <h3>Your Order</h3>
            <p>A delicios burger with the following ingredients :</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price: {this.props.price}</strong></p> 
            <p>Continue with checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
        </Auxs>
        )
    }
} 

export default orderSummary;