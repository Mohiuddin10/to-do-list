import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
  const [ value, setValue ] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
  }
  return (
    <form action="" className='TodoForm' onSubmit={handleSubmit}>
      <input className='todo-input' type="text" name="" id="" onChange={e => setValue(e.target.value)} placeholder='Whats on your list?'/>
      <button className='todo-btn' type="submit">Add Task</button>

    </form>
  )
}
