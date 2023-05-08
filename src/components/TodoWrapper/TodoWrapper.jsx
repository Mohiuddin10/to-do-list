import React, { useState } from 'react'
import { TodoForm } from '../TodoForm/TodoForm'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, isCompleted: false, isEdited: false }]);
        console.log(todos);
    }
  return (
    <TodoForm addTodo={addTodo}/>
  )
}



//rafc