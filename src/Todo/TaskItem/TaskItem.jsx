import { useState, useEffect } from 'react'
import styles from './TaskItem.module.css'

export default function TaskItem({task, deleteItem, id}){
  const [status, setStatus] = useState(false)

  function changeStatus(){
    setStatus(!status)
    
  }
  useEffect(()=>{
    console.log(id);
  },[id])


  return <div className={!status ? styles.item : styles.aprove}>
    <input type='checkbox' value={status} onChange={changeStatus}/>
    <div className={styles.titleItem}>
      <span>{task}{status.toString()}</span>
    </div>
    <button onClick={()=>deleteItem(id)}>Clear</button>
  </div>
}