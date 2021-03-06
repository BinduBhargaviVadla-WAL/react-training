import { useState } from "react";
const StateVariablesInput = () => {
    let [result, setResult] = useState(0);
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);
    let doAddition = () => {
        setResult(parseInt(a) + parseInt(b));
    };
    return (
        <div>The addition is {result}<br />
            <br />
            <input type="number"
                value={a}
                onInput={(event) => {
                    setA(event.target.value)
                }}
            />
            <input type="number"
                value={b} onInput={(event) => {
                    setB(event.target.value);
                }}
            />
            <button onClick={ doAddition}>Add</button>
            </div>
    )
}
export default StateVariablesInput;