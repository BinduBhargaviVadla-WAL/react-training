import CountReducerContext from "./CountReducerContext";
import { useContext } from "react";
const CountReducerButtons = () => {
    const {dispatch} = useContext(CountReducerContext);
    return (
        <div>
            <button
            onClick={() => {
                dispatch({type:"increase"});
            }}>
                Increase
            </button>
            <button
            onClick={() => {
                dispatch({type:"decrease"});
            }}>Decrease</button>
        </div>
    );
}
export default CountReducerButtons;