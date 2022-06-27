import { useState, useEffect } from "react";
import axios from "axios";
const TodoServer = () => {
  let [todos, setTodos] = useState([
    { item: "Cook Breakfast", status: "complete" },
    { item: "Do Coding", status: "incomplete" },
  ]);
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    axios
      .get("/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // let [item, setItem] = useState("");
  // let [status, setStatus] = useState("");
  let addTodo = (event) => {
    event.preventDefault();
    let todoObject = {
      item: event.target.item.value,
      status: event.target.status.value,
    };
    console.log(todoObject);
    axios
      .post("/todos", todoObject)
      .then((res) => {
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
    // let newArray = [...todos, newOb]
    // console.log(newArray);
    // setTodos(newArray);
  };
  let deleteTodo = (indexToDelete) => {
    axios
      .delete("/todos/" + indexToDelete)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getTodos();
  };
  return (
    <div>
      <br />
      <form onSubmit={addTodo}>
        <input type='text' name='item' />
        <select name='status'>
          <option value='complete'>Complete</option>
          <option value='incomplete'>Incomplete</option>
        </select>
        <button>Add</button>
      </form>
      {todos.map(function (val, index) {
        return (
          <div>
            Item : {val.item}
            <br />
            Status: {val.status}
            <br />
            <button
              onClick={() => {
                deleteTodo(index);
              }}
            >
              {" "}
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoServer;
