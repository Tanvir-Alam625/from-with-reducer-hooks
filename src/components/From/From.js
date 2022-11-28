import { useReducer } from "react";
import { reducer } from "../ManageState/Reducer";
import { initialState } from "../ManageState/State";
import SignupFrom from "./SignupFrom";

const From = () => {
   
    const [state,dispatch] = useReducer(reducer, initialState);
    return (
        <div className="from-container">
            <SignupFrom state={state} dispatch={dispatch} />
        </div>

    )
}

export default From;
