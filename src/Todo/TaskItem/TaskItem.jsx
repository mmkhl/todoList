import { useState } from 'react'
import styles from './TaskItem.module.css'

export default function TaskItem({task, deleteItem, id}){
  const [status, setStatus] = useState(false)

  function changeStatus(){
    setStatus(!status)
  }
  return <div className={styles.item}>
    <input type='checkbox' value={status} onChange={changeStatus}/>
    <div className={styles.titleItem}>
      <span>{task}{status.toString()}</span>
    </div>
    <button onClick={()=>deleteItem(id)}>Очистить</button>

  </div>
}