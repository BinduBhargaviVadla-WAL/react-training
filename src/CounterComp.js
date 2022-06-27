import {useState} from 'react'
function CounterComp() {
    let [count,setCount] = useState(0);
    function increase() {
        setCount(count+2);
    }
    function decrease() {
        setCount(count-2);
    }
    function reset(){
        setCount(0);
    }
    return (
        <div className="counter form">
            <h1><u>Counter</u></h1>
          <h3>count = {count}</h3> 
            <br/>
            <button className='inc' onClick={increase}>Increase</button>
            <button className='dec' onClick={decrease}>Decrease</button>
            <button className='reset' onClick={reset}>Reset</button>
        </div>

    )
}
export default CounterComp;