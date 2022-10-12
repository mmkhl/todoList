import styles from './InputTask.module.css'
import React, {useState} from 'react'


const  InputTask = (props) => {
  const [value, setValue] = useState('')

  console.log(props);
  
  return <div className={styles.createItem}>
    <input value={value} onChange={(e)=> setValue(e.target.value)}/>
    <button onClick={() => props.addTodo(value)}>+</button>
  </div>
}

export default InputTask;