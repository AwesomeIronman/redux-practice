import * as actionTypes from './constants'

export const initialState = {
    iceCreamCount: 0
}

function reducer(state = initialState, { type }) {
    switch (type) {
        case actionTypes.BUY_ICE_CREAM: {
            return {
              iceCreamCount: state.iceCreamCount + 1,
            }
        }

        case actionTypes.SELL_ICE_CREAM: {
            return {
                iceCreamCount: state.iceCreamCount - 1,
            } 
        }

        case actionTypes.RESET_ICE_CREAM: {
            return {
                iceCreamCount: 0,
            }
        }
    
        default: {
            return state
        }
    }
}

export default reducer;