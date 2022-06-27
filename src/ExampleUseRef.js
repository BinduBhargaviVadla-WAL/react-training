import {useRef} from 'react'

const ExampleUSeRef =()=>{
    const refDefaultValue=null;
    const inputref=useRef(refDefaultValue);
    const showInputDomObject=()=>{
        //input .current gives us the dom object of the element we have pointed
        console.log(inputref.current)
        alert(inputref.current.value)
    }
    return(
        <div>
            <h1>I am Heading</h1>
            <input ref={inputref} type="text" name="firstname" />
            <button onClick={showInputDomObject}>Show Input</button>
        </div>
    )
}
export default ExampleUSeRef