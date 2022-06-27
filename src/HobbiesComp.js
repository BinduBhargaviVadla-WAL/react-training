import { useState } from "react";

function HobbiesComp() {
    let [hobby, setHobby] = useState(["hobby1", "hobby2", "hobby3"]);
    function addHobby(event) {
        event.preventDefault();
        console.log(event);
        let formTag = event.target;
        let inputTag = formTag.hobby;
        console.log(formTag);
        console.log(inputTag);
        let newHobby = [...hobby,inputTag.value];
        setHobby(newHobby);
    }
    function removeAll(){
        setHobby([]);
    }
    return (
        <div className="App-div">
            <form onSubmit={addHobby}>
                <input type="text" name="hobby" />
                <button>Add Hobby</button>
            </form>
            <button onClick={removeAll}>Remove All</button>
            {hobby.map(function(val,index){
                return <div>{val}</div>
            })}
        </div>
    )
}
export default HobbiesComp;