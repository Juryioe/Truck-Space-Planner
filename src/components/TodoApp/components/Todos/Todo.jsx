import { RiTodoFill } from 'react-icons/ri'
import { TiDelete } from 'react-icons/ti'
import { MdOutlineDone } from 'react-icons/md'

import styles from './Todo.module.scss'

function Todo({ todo, deleteTodo, todoCompleted }) {
  return (
    <div className={styles.todoWrapper}>
      <div className={styles.taskWrapper}>
        <div>
          <RiTodoFill
            size={'12px'}
            className={
              todo.isCompleted ? styles.completedtodoIcon : styles.todoIcon
            }
          />
        </div>
        <span className={todo.isCompleted ? styles.completedTask : styles.task}>
          {todo.text}
        </span>
      </div>
      <div className={styles.buttons}>
        <MdOutlineDone
          className={styles.completeIcon}
          size={'1.4rem'}
          onClick={() => todoCompleted(todo.id)}
        />
        <TiDelete
          size={'1.6rem'}
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  )
}

export default Todo
