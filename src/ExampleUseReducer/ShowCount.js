import CountReducerContext from "./CountReducerContext";
import { useContext } from "react";
const ShowCount = () => {
    const reducerValue = useContext(CountReducerContext);
    return <div>Count = {reducerValue.state.count}</div>
};
export default ShowCount;