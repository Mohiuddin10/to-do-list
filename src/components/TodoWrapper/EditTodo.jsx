import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [ value, setValue ] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }
  return (
    <form action="" className='TodoForm' onSubmit={handleSubmit}>
      <input className='todo-input' type="text" name="" id="" onChange={e => setValue(e.target.value)} placeholder='Update your list?'/>
      <button className='todo-btn' type="submit">Update Task</button>

    </form>
  )
}
