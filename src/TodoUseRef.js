import {useRef} from 'react';
import {useState} from 'react';

const TodoUseref = () => {
    let [todos, setTodos] = useState([{ item: "Cook Breakfast", status: "complete" },
    { item: "Do Coding", status: "incomplete" }]);

    const refDefaultValue=null;
    
    const inputref=useRef(refDefaultValue);
    const selectref = useRef(refDefaultValue);

    const addTodo = ()=>{
        console.log(selectref.current.value)
        let todoObject = {
            item: inputref.current.value,
            status: selectref.current.value,
        };
        let newTodo = [...todos,todoObject];
        setTodos(newTodo);
    }

    return(
        <div>
                <input ref={inputref} type="text" name="item"/>
                <select ref={selectref} name="status">
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button onClick={addTodo}>Add</button>
            {todos.map((val,index) =>{
                return(
                    <div className="border">
                        Status : {val.status}<br/>
                        Todo:{val.item}
                        
                    </div>
                );
            })}
        </div>
    )
}
export default TodoUseref;