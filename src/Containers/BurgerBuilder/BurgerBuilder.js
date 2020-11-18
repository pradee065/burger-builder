import React, { Component } from 'react';
import Auxs from '../../hoc/auxs';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render(){
        return(
            <Auxs>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Auxs>
        )
    }
}

export default BurgerBuilder;