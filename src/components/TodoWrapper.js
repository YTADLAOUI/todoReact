import React,{useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from "./TodoForm";

export  const TodoWrapper =() => {
  const [todos,setTodos]= useState([])
   const addTodo = async todo =>{
     setTodos([...todos,{id: uuidv4(),task: todo,completed: false,isEditing: false}])
    }
    useEffect(() => {
      console.log(todos);
    }, [todos]);
  return(
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}