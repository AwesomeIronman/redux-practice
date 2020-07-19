import * as actionTypes from './constants'

export const initialState = {
    cakeCount: 0
}

function reducer(state = initialState, { type }) {
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
    
        default: {
            return state
        }
    }
}

export default reducer;