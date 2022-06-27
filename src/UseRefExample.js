import {useRef} from 'react'
const UseRefExample =()=>{
    const refDefaultValue=null;
    const inputref=useRef(refDefaultValue);
    const showInput=()=>{
        //input .current gives us the dom object of the element we have pointed
        console.log(inputref.current)
        alert(inputref.current.value)
    }
    return(
        <div>
            <input ref={inputref} type="text" name="firstname" />
            <button onClick={showInput}>Show Input</button>
        </div>
    )
}
export default UseRefExample;