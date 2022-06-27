import {useState} from "react";
import { Outlet} from 'react-router-dom';
function BetterCounterCustom() {
    let [count,setCount,increase,decrease,reset] = useSupportFunction();
    
    return (
        <div>
            <h1>count = {count}</h1>
            <br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <Outlet/>
        </div>

    )
}
const useSupportFunction= () =>{
    let [count,setCount] = useState(0);
    function increase() {
        setCount(count+1);
    }
    function decrease() {
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }
    return [count,setCount,increase,decrease,reset];
};
export default BetterCounterCustom;