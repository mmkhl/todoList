import styles from './Todo.module.css';
import {useSelector} from 'react-redux'
// import {addItem, addTodo} from '../store/todoSlice'
import InputTask from './InputTask/InputTask'
import TaskItem from './TaskItem/TaskItem'

export default function Todo(){
  // const [todos, setTodos] = useState([]);
  const todos = useSelector(state => state.todos.todos)
  todos.length ? console.log(
    todos.map(todo=>todo.status)): console.log(null);


  return <div className={styles.todoBlock}>
    <h1>ToDo APP</h1>
    <InputTask />
    <hr/>
    {todos.map((todo) => 
    <TaskItem 
    key={todo.id} 
    {...todo} 
    status={todo.status} />
    )}
  </div>

}