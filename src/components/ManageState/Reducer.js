import { actionsName } from "./Actions"

export const reducer = (state, action) =>{
    switch (action.type) {
        case actionsName.INPUT:
            return{
                ...state,
                [action.payload.name]: action.payload.value
            }  
        case actionsName.TOGGLE:
            return{
                ...state,
                [action.payload.name]: !state.term
            }  
        case actionsName.INCREMENT_QUANTITY:
            return{
                ...state,
                quantity: state.quantity + 1
            }  
        case actionsName.DECREMENT_QUANTITY:
            return{
                ...state,
                quantity: state.quantity === 0 ? 0 : state.quantity - 1
            } 

        default:
            return state;
    }
}