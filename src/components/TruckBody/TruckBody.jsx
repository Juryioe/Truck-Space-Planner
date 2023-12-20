import { useState } from 'react'
import { usePDF } from 'react-to-pdf'
import { downloadSvg } from './assets/svg/download'
import './TruckBody.scss'

const TruckBody = ({ divElement }) => {
  const defaultTrailerWidth = 252
  const defaultTrailerHeight = 1364
  const [trailerWidth, setTrailerWidth] = useState(defaultTrailerWidth)
  const [trailerHeight, setTrailerHeight] = useState(defaultTrailerHeight)
  const { toPDF, targetRef } = usePDF({ filename: 'Loading_plan.pdf' })

  const handleTrailerHeightChange = (e) => {
    const value = +e.target.value + 4
    setTrailerHeight(value === '' ? defaultTrailerHeight : value)
  }

  console.log(trailerHeight, trailerWidth)

  const handleTrailerWidthChange = (e) => {
    const value = +e.target.value + 4
    setTrailerWidth(value === '' ? defaultTrailerWidth : value)
  }

  const trailerDimensions = {
    height: trailerHeight + 'px',
    width: trailerWidth + 'px',
  }

  return (
    <div ref={targetRef}>
      <div className="trailer__dim">
        <div className="download__wrap">
          <p onClick={() => toPDF()}>{downloadSvg} Download the loading plan</p>
        </div>
        <p>
          Truck trailer length
          <input
            type="text"
            className="form-control"
            defaultValue={1360}
            onChange={handleTrailerHeightChange}
          ></input>
          width
          <input
            className="form-control"
            type="text"
            defaultValue={248}
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
    </div>
  )
}

export default TruckBody
