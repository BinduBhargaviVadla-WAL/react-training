import { useEffect, useState } from 'react'

const ExampleUseEffect = () => {
    const [count, setCount] = useState(0);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        alert("Component Loaded")
        //Wnen ever the button clicks the title is updated
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;

    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );

}
export default ExampleUseEffect;