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