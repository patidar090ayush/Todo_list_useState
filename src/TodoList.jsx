import React from 'react'

const TodoList = ({todos}) => {
  return (
        <div>
          {todos.map((todo) => (
            <ul key={todo.id}><li>{todo.data}</li></ul>
          ))}
        </div>
  )
}

export default TodoList