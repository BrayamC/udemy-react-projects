import {DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS} from './actions'

/*
 * reducer -- function used to update store
 * two arguments -- state, action
 * state -- old state before update
 * action - what updated
 * return -- updated or old state
*/

import cartItems from "./cart-items";
//initialize store
const initialStore = {
  cart: cartItems,
  total: 100,
  amount: 5
};


const reducer = (state = initialStore, action) => {
    switch(action.type){
        case CLEAR_CART:
            return {...state, cart: []};
        case DECREASE:
            let tempCartDecrease = [];

            if(action.payload.amount === 1){
                tempCartDecrease = state.cart.filter((item) => item.id !== action.payload.id);
            } else {
                tempCartDecrease = state.cart.map((cartItem) => {
                    if(cartItem.id === action.payload.id){
                        cartItem = {...cartItem, amount:cartItem.amount-1};
                    }
                    return cartItem;
                });
            }
            return {...state, cart:tempCartDecrease}
        case INCREASE:
            let tempCart = state.cart.map((cartItem) => {
                if(cartItem.id === action.payload.id){
                    cartItem = {...cartItem, amount:cartItem.amount+1};
                }
                return cartItem;
            });
            return {...state, cart:tempCart}
        case REMOVE:
            return {...state, cart:state.cart.filter((item) => item.id !== action.payload.id)};
        case GET_TOTALS:
            let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
                const {price, amount} = cartItem;
                const itemTotal = price * amount;

                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                
                return cartTotal;
            }, {
                total: 0,
                amount: 0
            });
            total = parseFloat(total.toFixed(2));
            return {...state, total, amount};
        default:
            return state; // if no action, return old state
    }
}

export default reducer;