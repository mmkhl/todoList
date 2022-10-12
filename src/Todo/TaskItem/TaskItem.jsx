import styles from './TaskItem.module.css'



export default function TaskItem({task}){
  return <div className={styles.item}>
    <input type='checkbox'/>
    <div>
      <span>{task}</span>
    </div>
  </div>
}