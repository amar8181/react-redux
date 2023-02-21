const initialstate = {
    cardData: []
}
export default function cardItem(state=initialstate, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: action.data
            }
            break;
            default:
                return state
    }
}