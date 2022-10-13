import { useState } from 'react'
import styles from './TaskItem.module.css'

export default function TaskItem({task, deleteItem, id}){
  const [status, setStatus] = useState(false)

  function changeStatus(){
    setStatus(!status)  }



  return <div className={!status ? styles.item : styles.aprove}>
    <input type='checkbox' value={status} onChange={changeStatus}/>
    <div className={styles.titleItem}>
      <span>{task}</span>
    </div>
    <button onClick={()=>deleteItem(id)}></button>
  </div>
}