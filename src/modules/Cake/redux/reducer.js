import * as actionTypes from './constants'

export const initialState = {
    cakeCount: 0
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.BUY_CAKE: {
            return {
              cakeCount: state.cakeCount + 1,
            }
        }

        case actionTypes.SELL_CAKE: {
            return {
                cakeCount: state.cakeCount - 1,
            } 
        }

        case actionTypes.RESET_CAKE: {
            return {
                cakeCount: 0,
            }
        }

        case actionTypes.CAKE_LOADED: {
            return {
                cakeCount: state.cakeCount + payload,
            }
        }
    
        default: {
            return state
        }
    }
}

export default reducer;