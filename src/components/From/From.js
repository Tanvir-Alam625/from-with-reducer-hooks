import { useReducer } from "react";
import SignupFrom from "./SignupFrom";

const From = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        education:"",
        quantity: 0,
        feedback: "",
        term: false
    };
    const reducer = (state, action) =>{
        switch (action.type) {
            case "INPUT":
                return{
                    ...state,
                    [action.payload.name]: action.payload.value
                }  
            case "TOGGLE":
                return{
                    ...state,
                    [action.payload.name]: !state.term
                }  
            case "INCREMENT_QUANTITY":
                return{
                    ...state,
                    quantity: state.quantity + 1
                }  
            case "DECREMENT_QUANTITY":
                if(state.quantity > 0){
                    return{
                        ...state,
                        quantity: state.quantity - 1
                    }  
                }else{
                    return{
                        ...state,
                        quantity: 0
                    } 
                }

            default:
                return state;
        }
    }
    const [state,dispatch] = useReducer(reducer, initialState);
    return (
        <div className="from-container">
            <SignupFrom state={state} dispatch={dispatch} />
        </div>

    )
}

export default From;
