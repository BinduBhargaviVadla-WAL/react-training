import {useState} from "react";
function Native(){
    let [city,setCity] = useState("");
    function addCity(event){
        event.preventDefault();
        console.log(event);
        let formTag=event.target;
        let inputTag=formTag.city;
        console.log(formTag);
        console.log(inputTag);
        setCity(inputTag.value);
    }
    return (
        <div>
            <form onSubmit={addCity} className="form">
            <h1>City : {city}</h1>
            <input type="text" name="city" placeholder="Enter Your Native City" />
            <button>Submit</button>
            </form>
            
        </div>
    )
}
export default Native;