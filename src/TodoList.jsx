// import React from 'react'

// const TodoList = ({todoss}) => {
//     const [isFinished, setIsFinished] = React.useState(false);
//   return (
//         <div>
//           {todoss.map((todo) => (
//             <ul key={todo.id}><li>{todo.data}</li></ul>   ))}
//             <button onClick={() => setIsFinished(!isFinished)}>{isFinished ? "Mark as Unfinished" : "Mark as Finished"}</button>
       
//         </div>
//   )
// }

// export default TodoList




import React from "react";

const TodoList = ({ todoss }) => {
  const [finishedTodos, setFinishedTodos] = React.useState({});

  const toggleFinish = (id) => {
    setFinishedTodos({
      ...finishedTodos,
      [id]: !finishedTodos[id]
    });
  };

  return (
    <div>
      {todoss.map((todo) => (
        <ul key={todo.id}>
          <li
            style={{
              textDecoration: finishedTodos[todo.id] ? "line-through" : "none"
            }}
          >
            {todo.data}
          </li>

          <button onClick={() => toggleFinish(todo.id)}>
            {finishedTodos[todo.id] ? "Mark Unfinished" : "Mark Finished"}
          </button>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;


