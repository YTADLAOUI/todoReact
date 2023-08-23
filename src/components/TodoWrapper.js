import React,{useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export  const TodoWrapper =() => {
  const [todos,setTodos]= useState([])
   const addTodo = todo =>{
     setTodos([...todos,{id: uuidv4(),task: todo,completed: false,isEditing: false}])
    }
    useEffect(() => {
      console.log(todos);
    }, [todos]);
   const toggleComplete = id => {
    setTodos(todos.map(todo=>todo.id === id ? {...todo,completed: !todo.completed}: todo))
   }
   
   const trash = (id)=>{
    setTodos(todos.filter(todo=>todo.id !== id))
   }
  return(
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo}/>
      { todos.map((todo,index)  =>(
        <Todo task={todo} key={index} toggleComplete = {toggleComplete} trash={trash} />))}
        
    </div>
  )
}