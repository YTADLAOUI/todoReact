import React,{useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import {EditTodoForm} from "./EditTodoForm"

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

   const editTodo = (id)=>{
    setTodos(
      todos.map(todo=>(todo.id===id?{...todo, isEditing :  !todo.isEditing}:todo))
    )
   }
   const editTask = (value,id)=>{
    setTodos(
      todos.map(todo=>(todo.id===id?{...todo,task:value , isEditing :  !todo.isEditing}:todo))
    )
   }
  return(
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo}/>
      { todos.map((todo,index)  =>
        (
          todo.isEditing ? 
          <EditTodoForm editTodo={editTask} task={todo}/>
            : (
            <Todo task={todo} key={index} toggleComplete = {toggleComplete} trash={trash} editTodo={editTodo} />
            )
          )
        )
      }
        
    </div>
  )
}