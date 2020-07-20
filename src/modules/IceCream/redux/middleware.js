import { sellIceCream } from "./actions"

export function negativeCountMiddleware({ getState }) {
    return function (next) {
        return function (action) {
            const { iceCream: {iceCreamCount} } = getState()

            if (action.type === sellIceCream().type &&
                    iceCreamCount === 0) {
                console.log('ICE CREAM MIDDLWARE BLOCKING');
                return;
            }

            return next(action)
        }
    }
}