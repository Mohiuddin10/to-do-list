import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="" id="" value={value} onChange={(e) => setValue(e.target.value)} placeholder='write your task' />
      <button type="submit">Add Task</button>
    </form>
  )
}
