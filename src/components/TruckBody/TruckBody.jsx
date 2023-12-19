import { useState } from 'react'
import './TruckBody.scss'

const TruckBody = ({ divElement }) => {
  const defaultTrailerWidth = '248'
  const defaultTrailerHeight = '1360'
  const [trailerWidth, setTrailerWidth] = useState(defaultTrailerWidth)
  const [trailerHeight, setTrailerHeight] = useState(defaultTrailerHeight)

  const handleTrailerHeightChange = (e) => {
    const value = e.target.value
    setTrailerHeight(value === '' ? defaultTrailerHeight : value)
  }

  const handleTrailerWidthChange = (e) => {
    const value = e.target.value
    setTrailerWidth(value === '' ? defaultTrailerWidth : value)
  }

  const trailerDimensions = {
    height: trailerHeight + 'px',
    width: trailerWidth + 'px',
  }

  return (
    <>
      <div className="trailer__dim">
        <p>
          Truck trailer length
          <input
            type="text"
            className="form-control"
            value={trailerHeight}
            onChange={handleTrailerHeightChange}
          ></input>
          width
          <input
            className="form-control"
            type="text"
            value={trailerWidth}
            onChange={handleTrailerWidthChange}
          />
          cm
        </p>
      </div>
      <div className="truck__body">
        <div className="head"></div>
        <div className="trailer" style={trailerDimensions}>
          {divElement}
        </div>
      </div>
    </>
  )
}

export default TruckBody
