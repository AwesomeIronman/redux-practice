import * as actionTypes from "./constants.js";

export function buyCake() {
    return {
        type: actionTypes.BUY_CAKE
    }
}

export function sellCake() {
    return {
        type: actionTypes.SELL_CAKE
    }
}

export function reset() {
    return {
        type: actionTypes.RESET_CAKE
    }
}

export function fetchCakes() {
    return function (dispatch) {
        // We receive 5 cakes after 2 seconds
        return setTimeout(() => {
            dispatch({ type: actionTypes.CAKE_LOADED, payload: 5 });
        }, 2000);
    }
}