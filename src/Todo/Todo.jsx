import styles from './Todo.module.css'
import InputTask from './InputTask/InputTask'
import TaskItem from './TaskItem/TaskItem'
import React, { useState, useEffect } from 'react';

const getId = () => {
  return `${Math.random() * 100}${Date.now()}`;
};

export default function Todo(){
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    console.log(localStorage.getItem('myStorage'));

    setTodos(JSON.parse(localStorage.getItem('myStorage')) ?? []);
  }, [])
  
  const setValTodo = (value) => {
    const updatedValue = [...todos,  {id: getId(), task: value}]
    
    localStorage.setItem('myStorage', JSON.stringify(updatedValue));
    
    setTodos(updatedValue)
      
    console.log(localStorage.getItem('myStorage'))
  }
    
  function deleteTodo(id){
    const updatedValue = todos.filter((todo)=>todo.id !== id );
    setTodos(updatedValue)
    localStorage.setItem('myStorage', JSON.stringify(updatedValue));
      
  }

  


  return <div className={styles.todoBlock}>
    <h1>ToDo APP</h1>
    <InputTask addTodo={setValTodo}/>
    <hr/>
    {todos.map((todo) => <TaskItem deleteItem={deleteTodo} key={todo.id} task={todo.task} id={todo.id} status={todo.status}/>)}
  </div>

}