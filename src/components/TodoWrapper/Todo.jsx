import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Todo = (props, toggleComplete) => {
    const {task, id, toggleComplete} = props.task;
    console.log(task)
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(id)} className={`${task.completed ? 'completed' : ''}`}>{task}</p>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />

    </div>
  )
}
