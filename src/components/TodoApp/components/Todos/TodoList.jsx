import styles from './TodoList.module.scss'
import Todo from './Todo'
import TodosActions from './TodosActions'

function TodoList({
  todo,
  todos,
  deleteTodo,
  todoCompleted,
  setTodos,
  deleteCompletedHandler,
}) {
  return (
    <div className={styles.todoListContainer}>
      <div className={styles.actionsContainer}>
        {todos.length > 0 && (
          <TodosActions
            setTodos={setTodos}
            todo={todo}
            deleteCompletedHandler={deleteCompletedHandler}
          />
        )}
      </div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            todoCompleted={todoCompleted}
          />
        </div>
      ))}
    </div>
  )
}

export default TodoList
