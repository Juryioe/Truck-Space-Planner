import { useState, useRef } from 'react'
import { uid } from 'uid'
import { rotateIcon } from './assets/svg/rotate'
import { TiDelete } from 'react-icons/ti'
import Draggable from 'react-draggable'
import TruckBody from '../TruckBody/TruckBody'
import logo from './assets/logo.png'
import './Control.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const Control = () => {
  const elementLength = useRef()
  const elementWidth = useRef()
  const elementColor = useRef()
  const elementQuantity = useRef()
  const elementNote = useRef()
  const [elements, setElements] = useState([])
  const [errorLength, setErrorLength] = useState(false)
  const [errorWidth, setErrorWidth] = useState(false)
  const [zIndex, setZIndex] = useState(null)
  const errorCheckLenght = errorLength ? 'form-control error' : 'form-control'
  const errorCheckWidth = errorWidth ? 'form-control error' : 'form-control'

  const validateInput = () => {
    !elementLength.current.value ? setErrorLength(true) : setErrorLength(false)
    !elementWidth.current.value ? setErrorWidth(true) : setErrorWidth(false)
    !/^\d+$/.test(elementLength.current.value)
      ? setErrorLength(true)
      : setErrorLength(false)
    !/^\d+$/.test(elementWidth.current.value)
      ? setErrorWidth(true)
      : setErrorWidth(false)
  }

  const handleRemoveElement = (key) => {
    setElements((prevElements) => prevElements.filter((e) => e.key !== key))
  }

  const handleResetBtn = (e) => {
    e.preventDefault()
    setElements([])
  }

  const createNewElement = (e) => {
    e.preventDefault()
    validateInput()

    if (!elementWidth.current.value || !elementLength.current.value) return
    if (!errorLength && !errorWidth) {
      const newElement = Array.from(
        { length: +elementQuantity.current.value },
        (_, index) => {
          const key = uid()
          return (
            <div
              className="div_element"
              key={key}
              style={{
                width: `${elementWidth.current.value}px`,
                height: `${elementLength.current.value}px`,
                backgroundColor: elementColor.current.value,
              }}
            >
              <div className="dimensions">
                {elementLength.current.value}x{elementWidth.current.value}
              </div>
              <div className="icons__wrap">
                <div
                  className="delete__icon"
                  onClick={() => handleRemoveElement(key)}
                >
                  <TiDelete />
                </div>
                <div
                  className="rotate__icon"
                  onClick={() => handleElementRotate(key)}
                >
                  {rotateIcon}
                </div>
              </div>
              <div className="note">{elementNote.current.value}</div>
            </div>
          )
        }
      )
      setElements((prevElements) => [...prevElements, ...newElement])
    }
  }

  const handleElementRotate = (key) => {
    setElements((prevElements) => {
      return prevElements.map((element) => {
        if (element.key === key) {
          return (
            <div className="flipped" key={element.key}>
              {element}
            </div>
          )
        }
        return element
      })
    })
  }

  const divElement = (
    <div className="elements__container">
      {elements.map((element, index) => (
        <Draggable key={index}>
          <div
            className={index === zIndex ? 'z_index' : ''}
            onMouseEnter={() => setZIndex(index)}
          >
            {element}
          </div>
        </Draggable>
      ))}
    </div>
  )

  return (
    <>
      <div className="control__main">
        <div className="logo__block">
          <img src={logo} alt="logo" />
          <h1>
            Truck <span>space planner</span>
          </h1>
        </div>
        <div className="operations__block">
          <form>
            <div>
              <label>Quantity</label>
              <input
                type="number"
                min={1}
                className="form-control"
                ref={elementQuantity}
                defaultValue={1}
              />
            </div>
            <div id="containeras">
              <label>length</label>
              <input
                type="text"
                className={errorCheckLenght}
                ref={elementLength}
                defaultValue={120}
                onChange={validateInput}
              />
            </div>
            <div>
              <label>Width</label>
              <input
                type="text"
                className={errorCheckWidth}
                ref={elementWidth}
                defaultValue={80}
                onChange={validateInput}
              />
            </div>
            <div>
              <label>Note</label>
              <input
                type="text"
                className="form-control note"
                ref={elementNote}
              />
            </div>
            <div className="color_picker">
              <label>Color</label>
              <input
                type="color"
                className="form-control form-control-color"
                defaultValue="#EEE8E8"
                ref={elementColor}
              />
            </div>
            <div className="btn-group">
              <button
                className="btn btn-outline-primary"
                onClick={createNewElement}
              >
                Create
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={handleResetBtn}
              >
                Remove all goods
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>
      <TruckBody divElement={divElement} />
    </>
  )
}

export default Control
