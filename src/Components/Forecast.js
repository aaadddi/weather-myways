import React from 'react'
import './CSS/forecast.css'
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
export default function Forecast(props) {
  return (
    <div className='forecast'>
      <h6>Tomorrow,</h6>
      
        <h3>{props.data.high}°-{props.data.low}°</h3>
      <div className="tomorrow_value_text">
      <WbCloudyIcon style={{marginRight:'10px'}}/>
      <h6>{props.data.text}</h6>
      </div>
    </div>
  )
}
  