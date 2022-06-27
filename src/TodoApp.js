import { useState } from "react";
const TodoApp = () => {
    let [todos, setTodos] = useState([{ item: "Cook Breakfast", status: "complete" },
    { item: "Do Coding", status: "incomplete" }]);
    let [item, setItem] = useState("");
    let [status, setStatus] = useState("");
    let addTodo = (event) => {
        event.preventDefault();
        let newOb = { item: event.target.item.value, status: event.target.status.value }
        console.log(newOb);
        let newArray = [...todos, newOb]
        console.log(newArray);
        setTodos(newArray);
    };
    return (
        <div>
            <br />
            <form onSubmit={addTodo}>
            <input type="text" name="item"/>
                <select name="status">
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button>Add</button>
            </form>
            {todos.map(function (val, index) {
                return (<div>Item : {val.item}
                    <div>Status: {val.status}</div>
                    <br /></div>)
            })}
        </div>
    )
}
export default TodoApp;
