import * as actionTypes from './constants'

export const initialState = {
    iceCreamCount: 0
}

function reducer(state = initialState, { type, payload }) {
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

        case actionTypes.ICE_CREAM_LOADED: {
            return {
                iceCreamCount: state.iceCreamCount + payload
            }
        }
    
        default: {
            return state
        }
    }
}

export default reducer;