import React, { Component } from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/UI/Ordersummary/Ordersummary';
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
    constructor(props){
        super(props);
        console.log('[app.j] constructor is getting called here');
    }

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    static getDerivedStateFromProps (props, state){
        console.log('[App.js] getderivedfromprops is caleld', props);
        return state
    }

    componentDidMount(){
        console.log('[app.js] componentDidmount is called here');
    }

    shouldComponentUpdate(nextprops, nextstate){
        console.log('[app.js] componentshould update in APP is called here');
        return true;
    }

    componentDidUpdate(prevprops, prevstate){
        console.log('[app.js] componentDidupdate of APP js is called here');
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => { 
            return sum + el
        }, 0);
        this.setState({
            purchaseable : sum > 0
        })
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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddtion = INGREDINT_COSTS[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddtion;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }
    render(){
        console.log('[app.js] render method is getting called here');
        
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        // {} salad: true, bacon: false
        return(
            <Auxs>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientsadded={this.addIngredientHandler}
                ingredientsremoved={this.removeIngredientHandler}
                ordered={this.purchaseHandler}
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable}
                price={this.state.totalPrice}/>
            </Auxs>
        )
    }
}

export default BurgerBuilder;