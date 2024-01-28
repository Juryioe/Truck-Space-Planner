import { useState, useEffect } from 'react'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { uid } from 'uid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import styles from './TodoApp.module.scss'
import Modal from './components/Modal'

function App() {
  const [todos, setTodos] = useState([])
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])
  const addTodoHandler = (text) => {
    const newTodo = { text: text, isCompleted: false, id: uid() }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const todoCompletedHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const resetTodosHandler = () => {
    setModal(true)
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className={styles.todoAppContainer}>
      <Modal modal={modal} setModal={setModal} setTodos={setTodos} />
      <strong className="cursor">
        <div className={styles.logoWrapper} title="I can be moved around!">
          <IoCheckmarkDoneCircleOutline size={'2rem'} className="logoIcon" />
          <span className={styles.h6}>What should be done?</span>
        </div>
      </strong>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodoHandler}
        todoCompleted={todoCompletedHandler}
        deleteCompletedHandler={deleteCompletedTodoHandler}
        resetTodosHandler={resetTodosHandler}
      />
    </div>
  )
}

export default App
