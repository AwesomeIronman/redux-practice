import { sellCake } from './actions'

export function negativeCountMiddleware({ getState }) {
    return function (next) {
        return function (action) {
            const { cake: {cakeCount}} = getState()

            if (action.type === sellCake().type &&
                    cakeCount === 0) {
                console.log('CAKE MIDDLEWARE BLOCKING');
                return;
            }

            return next(action)
        }
    }
}