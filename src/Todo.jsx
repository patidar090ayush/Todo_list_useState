import TodoList from "./TodoList";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button
        // onClick={() =>
        //     setTodos([...todos, { id: todos.length + 1, data: newTodo }])
        // }

        onClick={() => {
          if (newTodo.trim() === "") return;

          setTodos([...todos, { id: todos.length + 1, data: newTodo }]);
          setNewTodo("");
        }}
      >
        Add
      </button>

      <br />
       
      <TodoList todoss={todos} />
    </div>
  );
}

export default Todo;
