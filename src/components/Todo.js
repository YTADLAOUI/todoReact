import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo =({task,toggleComplete,trash,editTodo}) => {
  return(
    <div className="Todo">
      <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ?'completed' : "" }`}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon = {faPenToSquare} onClick={()=>editTodo(task.id)} />
        <FontAwesomeIcon  icon = {faTrash}  onClick={()=>trash(task.id)}/>
      </div>
    </div>
  )
}