import {useState} from "react";
function Hobby(){
    let [hobby,setHobby]=useState("Intial hobby");
    let [city,setCity]=useState("Intial city");
    function addHobby(event){
        event.preventDefault();
        console.log(event);
        let formTag=event.target;
        let inputTag=formTag.hobby;
        let inputTagCity=formTag.city;
        console.log(formTag);
        console.log(inputTag);
        setHobby(inputTag.value);
        setCity(inputTagCity.value);
    }
    return(
        <div>
            Hobby={hobby}&city={city}<br/>
            <form onSubmit={addHobby}>
                <input type="text" name="hobby"/>
                <input type="city" name="city"/>
                <button>Add Hobby</button>
            </form>
        </div>
    )


}
export default Hobby;