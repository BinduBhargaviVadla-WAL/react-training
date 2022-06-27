import { useReducer, useRef } from "react";
import HobbiesReducer from "./HobbiesReducer";
const Hobbies = () => {
    const inputRef = useRef();
    const initialValue = ["initial hobby 1", "Initial Hobby 2"];
    const [hobby, dispatch] = useReducer(HobbiesReducer, initialValue);
    
    return (
        <div>
            <input ref={inputRef} placeholder="Enter Your Hobby"/>
            <br />
            <button onClick={() => {
                dispatch({ type: "add", name: inputRef.current.value })
            }}>Add hobby</button>
            <button className="clearBtn"
                onClick={() => {
                    dispatch({ type: "clearAll" })
                }}>Clear All</button>
            <h1>Hobbies</h1>
            <table>
                
            {hobby.map((val, index) => {
                if (val == "") {
                    return (<div></div>)
                }
                return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{val}</td>
                            <td><button className="delBtn"
                            onClick={(event) => {
                                event.preventDefault();
                                dispatch({ type: "deleteIndex", index })
                            }}>Delete</button></td>
                        </tr>
                )
            })}
            </table>
            
        </div>
    );
}
export default Hobbies;