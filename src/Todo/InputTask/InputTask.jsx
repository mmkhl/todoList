import styles from './InputTask.module.css'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../../store/todoSlice'

const  InputTask = ({ id, value, completed }) => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  }
  
  return <div className={styles.createItem}>
    <input placeholder='Add todo' value={text} onChange={(e)=> setText(e.target.value)}/>
    <button onClick={handleAction}>+</button>
  </div>
}

export default InputTask;