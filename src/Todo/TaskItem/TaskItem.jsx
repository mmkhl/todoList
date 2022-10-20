import styles from './TaskItem.module.css'
import {useDispatch} from 'react-redux'
import {deleteTodo, changeStatus} from '../../store/todoSlice'

export default function TaskItem({content, status, id}){

  const dispatch = useDispatch()

  return <div className={!status ? styles.item : styles.aprove}>
    <input type='checkbox' value={status} 
    onChange={()=>dispatch(changeStatus({id}))}/>
    <div className={styles.titleItem}>
      <span>{content}</span>
    </div>
    <button onClick={()=>dispatch(deleteTodo({id}))}></button>
  </div>
}