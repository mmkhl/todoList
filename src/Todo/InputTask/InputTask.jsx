import styles from './InputTask.module.css'
import React, {useState} from 'react'


const  InputTask = ({ addTodo }) => {
  const [value, setValue] = useState('')  
  const addTaskItem = () => {
    addTodo(value);
    setValue('');
  }

  return <div className={styles.createItem}>
    <input placeholder='Add todo' value={value} onChange={(e)=> setValue(e.target.value)}/>
    <button onClick={addTaskItem} onKeyUp={addTaskItem}>+</button>
  </div>
}

export default InputTask;