import './App.css'
import Control from './components/Control/Control'
import Draggable from 'react-draggable'
import TodoApp from './components/TodoApp/TodoApp'

function App() {
  return (
    <>
      <Draggable defaultPosition={{ x: 200, y: 1000 }} position={null}>
        <div>
          <TodoApp />
        </div>
      </Draggable>
      <Control />
    </>
  )
}

export default App
