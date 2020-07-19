import * as actionTypes from "./constants.js";

export function buyIceCream() {
    return {
        type: actionTypes.BUY_ICE_CREAM
    }
}

export function sellIceCream() {
    return {
        type: actionTypes.SELL_ICE_CREAM
    }
}

export function reset() {
    return {
        type: actionTypes.RESET_ICE_CREAM
    }
}