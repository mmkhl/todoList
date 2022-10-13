import styles from './Todo.module.css'
import InputTask from './InputTask/InputTask'
import TaskItem from './TaskItem/TaskItem'
import React, {useState} from 'react';

const getId = () => {
  return `${Math.random() * 100}${Date.now()}`;
};

export default function Todo(){
  const [todos, setTodos] = useState([]);
    const setValTodo = (value) => {
      setTodos([
        ...todos, {id: getId(), task: value},
      ])
    }
    function deleteTodo(id){
      setTodos(todos.filter((todo)=>todo.id !== id ))
    }
  
  return <div className={styles.todoBlock}>
    <h1>ToDo APP</h1>
    <InputTask addTodo={setValTodo}/>
    <hr/>
    {todos.map((todo) => <TaskItem deleteItem={deleteTodo} key={todo.id} task={todo.task} id={todo.id} status={todo.status}/>)}
  </div>

}