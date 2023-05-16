import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';


export const TodoWapper = () => {
  const [ todos, setTodos ] = useState([]);
  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEdited: false}]);
    console.log(todos);
  };
  
const toggleComplete = id => {
  setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
}

const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
}

const editTodo = (id) => {
  setTodos(todos.map(todo => todo.id === id ? {...todo, isEdited: !todo.Edited} : todo));
};

  return (
    <div className="TodoWrapper">
        <TodoForm addTodo={addTodo} />
        {
          todos.map((todo) => <Todo
          key={todo.id}
          task={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
         />)
        }
    </div>
    
  )
}




//rafc