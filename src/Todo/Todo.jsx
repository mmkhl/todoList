import styles from './Todo.module.css'
import InputTask from './InputTask/InputTask'
import TaskItem from './TaskItem/TaskItem'
import React, {useState} from 'react';

const getId = () => {
  return `${Math.random() * 100}${Date.now()}`;
};

export default function Todo(){

  const [todos, setTodos] = useState([
    {id: 1, name: 'Дописать тудулист'}, 
    {id: 2, name: 'Дописать тудулист'},
    {id: 3, name: 'Дописать тудулист'},]);

    const setValue = (value) => {
      setTodos([
        ...todos, {id: getId(), task: value}
      ])
    }
  
  return <div className={styles.todoBlock}>
    <h1>ToDo APP</h1>
    <InputTask addTodo={setValue} a="aaa"/>
    <hr/>
    {todos.map((todo) => <TaskItem key={todo.id} task={todo.task}/>)}
  </div>

}