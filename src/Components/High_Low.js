import React from 'react'
import './CSS/highlow.css'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
export default function High_Low(props) {
  return (
    <div className='high_low'>
        <h2>{(props.high?props.high:props.low)}° {props.unit}</h2>
        <div className="hl_desc">
        <DeviceThermostatIcon style={(props.high?{'color':'red'}:{'color':'blue'})}/>
        <h5>Today's {props.high?"High":"Low"}</h5>
        </div>
    </div>
  )
}
