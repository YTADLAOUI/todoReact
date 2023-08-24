import {React,useState} from "react";

export const EditTodoForm =({editTodo,task}) => {
  const [value, setValue]= useState(task.task)
  // const valueTask = (valeur)=>{
  //     setValue =valeur
  // } 
  // console.log(value) 
 const handlSubmit =(e)=>{
  e.preventDefault();
  editTodo(value,task.id)

 }
  return(
    <form className="TodoForm" onSubmit={handlSubmit}>
      <input type="text" className="todo-input" placeholder="updatethe task ?" value={value} onChange={(e)=>setValue(e.target.value) } required/>
      <button type="submit" className="todo-btn" 
       >update Task</button>
    </form >
  )
}