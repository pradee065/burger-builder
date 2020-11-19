import React, { Component } from 'react';
import Auxs from '../../hoc/auxs';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGREDINT_COSTS = {
    salad: 0.5,
    bacon: 0.3,
    cheese: 1.3,
    meat: 1
}

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddtion = INGREDINT_COSTS[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddtion;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })

    }

    removeIngredientHandler = (type) => {

    }

    render(){
        return(
            <Auxs>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientsadded={this.addIngredientHandler}/>
            </Auxs>
        )
    }
}

export default BurgerBuilder;