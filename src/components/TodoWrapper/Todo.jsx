import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Todo = ({task, toggleComplete}) => {
  return (
    <div className='Todo'>

      <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)} >{task.task}</p>
      <div className="">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>

    </div>
  )
}
