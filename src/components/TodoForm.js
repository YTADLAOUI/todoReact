import {React,useState} from "react";

export const TodoForm =({addTodo}) => {
  const [value, setValue]= useState('')
  // const valueTask = (valeur)=>{
  //     setValue =valeur
  // } 
  // console.log(value) 
 const handlSubmit =(e)=>{
  e.preventDefault();
  addTodo(value)

  setValue("")
 }
  return(
    <form className="TodoForm" onSubmit={handlSubmit}>
      <input type="text" className="todo-input" placeholder="What is the task today?" value={value} onChange={(e)=>setValue(e.target.value) } required/>
      <button type="submit" className="todo-btn" 
       >Add Task</button>
    </form >
  )
}