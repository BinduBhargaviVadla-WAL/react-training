import { useRef } from 'react';
import { useState } from 'react';

const ExamUseRef = () => {
    let [heading, setHeading] = useState("Heading");
    const refDefaultValue = null;
    const inputRef = useRef(refDefaultValue);

    const changeHeading = () => {
        let inputVal = inputRef.current.value;
        setHeading(inputVal);
    }
    return (
        <div className='content'>
            <h1>{heading}</h1>
            <input ref={inputRef} type="text" name="header" /><br/>
            <button onClick={changeHeading}>Change Heading</button>
        </div>
    )
}
export default ExamUseRef;