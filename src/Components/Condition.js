import React from 'react'
import High_Low from './High_Low'
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import './CSS/condition.css'
import Today_details from './Today_details';
import Forecast from './Forecast';
export default function Condition(props) {
  
  const data = props.data;
  
  const todayforecast = data.todayforecast;
  return (
    <div className='condition'>
        <div className="date">
        <TodayOutlinedIcon className='dateicon' fontSize='large' />
        <h3>{data.condition.date}</h3>
        </div>
        <div className="tempmaxandlow">
        <High_Low high={todayforecast.high} unit={data.units.temperature}/>
        <High_Low low={todayforecast.low} unit={data.units.temperature}/>
        </div>
        <div className="lower" >
       
          <Today_details data={data.atmosphere} units={data.units} wind={data.wind}/>
          <Forecast data={data.tomorrowforecast} units={data.units}/>
        </div>
       
    </div>
 
  )
}
