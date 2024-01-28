import { LuRefreshCcw } from 'react-icons/lu'
import { AiFillDelete } from 'react-icons/ai'
import styles from './TodoActions.module.scss'

function TodosActions({ resetTodosHandler, deleteCompletedHandler }) {
  return (
    <div className={styles.todoActionsContainer}>
      <button
        className={styles.btn}
        title="Reset all task"
        onClick={resetTodosHandler}
      >
        <LuRefreshCcw className={styles.iconLuRefreshCCw} />
        <span>Reset all</span>
      </button>
      <button
        className={styles.btn}
        title="Delete completed tasks"
        onClick={deleteCompletedHandler}
      >
        <AiFillDelete className={styles.iconAifillDelete} />
        <span>Delete completed</span>
      </button>
    </div>
  )
}

export default TodosActions
