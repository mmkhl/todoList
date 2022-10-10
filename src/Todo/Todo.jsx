import styles from './Todo.module.css'
import InputTask from './InputTask/InputTask'
import TaskItem from './TaskItem/TaskItem'

export default function Todo(){
  return <div className={styles.todoBlock}>
    <InputTask/>
    
  </div>
}