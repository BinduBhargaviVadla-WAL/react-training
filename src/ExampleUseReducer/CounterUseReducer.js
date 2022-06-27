import { useReducer } from "react";
import CountReducer from "./CountReducer";
import CountReducerButtons from "./CountReducerButtons";
import CountReducerContext from "./CountReducerContext";
import ShowCount from "./ShowCount";
 const CounterUseReducer = () => {
     const initialValue = {count: 0};
     const [state,dispatch] = useReducer(CountReducer,initialValue);
     const reducerValue = {state,dispatch};
     return (
         <div>
             <CountReducerContext.Provider value={reducerValue}>
                 <ShowCount/>
                 <CountReducerButtons/>
             </CountReducerContext.Provider>
         </div>
     );
 }
 export default CounterUseReducer;