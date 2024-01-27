import styles from './TodoForm.module.scss'
import { useState } from 'react'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!text) return
    addTodo(text)
    setText('')
  }

  return (
    <form className={styles.forma} onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="form-control"
        value={text}
        placeholder="Add a new task"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={!text}
        className="btn btn-outline-primary"
        type="submit"
        title="Add new task"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
