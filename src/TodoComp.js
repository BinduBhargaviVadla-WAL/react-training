import { useState } from "react";
const TodoComp = () =>{
    let [todos, setTodos] = useState([{ item: "Cook Breakfast", status: "complete" },
    { item: "Do Coding", status: "incomplete" }]); 
    const addTodo = (event) => {
        event.preventDefault();
        let todoObject = {
            item: event.target.item.value,
            status: event.target.status.value,
        };
        let newTodo = [...todos,todoObject];
        setTodos(newTodo);
    };
    let deleteTodo = (indexToDelete) =>{
        let newTodos = todos.filter(function(val,index){
            if(indexToDelete == index){
                return false;
            }
            return true;
        });
        setTodos(newTodos);
    };
    return(
        <div>
            <form onSubmit={addTodo}>
                <input type="text" name="item"/>
                <select name="status">
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button>Add</button>
            </form>
            {todos.map((val,index) =>{
                return(
                    <div className="border">
                        Status : {val.status}<br/>
                        Todo:{val.item}
                        <button onClick={()=>{
                            deleteTodo(index);
                        }}>Delete</button>
                    </div>
                );
            })}
        </div>
    )
}
export default TodoComp;