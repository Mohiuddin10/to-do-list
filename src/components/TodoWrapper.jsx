import React, { useState } from 'react';
import ToDOForm from './ToDOForm';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
uuidv4();

const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
        console.log(todos);
    };
    return (
        <div className='TodoWrapper'>
            <ToDOForm addTodo={addTodo}>  </ToDOForm>
        </div>
    );
};

export default ToDoWrapper;