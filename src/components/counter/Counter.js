import { useReducer } from "react";
import CountBtn from "./CountBtn";
import CountView from "./CountView";

const Counter = () => {
    const initialSate = 0;
  const reducer = (state, action)=>{
    if(action.type === "INCREMENT"){
      return state + action.payload.count;
    }else if(action.type === "DECREMENT"){
      return state - action.payload.count;
    }else{
      return state;
    }
  }
  const [state,dispatch] = useReducer(reducer,initialSate);

    return(
        <div className="counter-container p-4 rounded shadow-md w-[400px] mx-auto">
             <CountView state={state} />
             <CountBtn dispatch={dispatch} />
        </div>
    )

}
export default Counter;