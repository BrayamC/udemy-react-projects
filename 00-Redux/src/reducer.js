import {DECREASE, INCREASE, CLEAR_CART, REMOVE} from './actions'

/*
 * reducer -- function used to update store
 * two arguments -- state, action
 * state -- old state before update
 * action - what updated
 * return -- updated or old state
*/

function reducer(state, action){
    switch(action.type){
        case CLEAR_CART:
            return {...state, cart: []};
        case DECREASE:
            console.log("DECREASING");
            return state;
        case INCREASE:
            console.log("INCREASING");
            return state;
        case REMOVE:
            console.log("REMOVE");
            return state;
        default:
            return state; // if no action, return old state
    }
}

export default reducer;