import React, { useState } from 'react';

const ToDOForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        
        addTodo(value);
    };
    
    return (
        <form className='toDoForm' onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setValue(e.target.value)} className="todo-input" id="" placeholder='what is your plan today?' />
            <button type="submit" className='todo-btn'>Add Task</button>

        </form>
    );
};

export default ToDOForm;