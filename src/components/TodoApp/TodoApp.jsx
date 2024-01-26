import { useState, useEffect } from 'react'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { uid } from 'uid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import styles from './TodoApp.module.scss'

function App() {
  const [todos, setTodos] = useState([])

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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className={styles.todoAppContainer}>
      <div className={styles.logoWrapper}>
        <IoCheckmarkDoneCircleOutline size={'2rem'} className="logoIcon" />
        <span className={styles.h6}>What should be done?</span>
      </div>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodoHandler}
        todoCompleted={todoCompletedHandler}
        deleteCompletedHandler={deleteCompletedTodoHandler}
      />
    </div>
  )
}

export default App
