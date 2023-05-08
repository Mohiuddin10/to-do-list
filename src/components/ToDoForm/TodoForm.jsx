import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
    e.preventDefault();
       addTodo(value);
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" onChange={e => setValue(e.target.value)} placeholder='write your task' />
        <button type="submit">Add task</button>
    </form>
  )
}
