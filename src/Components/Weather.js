import React from 'react'

import Left_Panel from './Left_Panel'
import Right_Panel from './Right_Panel'
import './CSS/weather.css'
export default function Weather(props) {
  const allData = props.data;
  
  const right_panel_data = {
    'units':allData.query.results.channel.units,
    'location' : allData.query.results.channel.location,
    
    'condition' : allData.query.results.channel.item.condition,
    'astronomy' :allData.query.results.channel.astronomy,
    'atmosphere' : allData.query.results.channel.atmosphere,
    'wind':allData.query.results.channel.wind,
    'todayforecast' : allData.query.results.channel.item.forecast[0],
    'tomorrowforecast':allData.query.results.channel.item.forecast[1]
  }
  const left_panel_data = {
    'condition' : allData.query.results.channel.item.condition,

  }
  return (
    <div className='weather'>
      
      <Left_Panel data={left_panel_data}/>
      <Right_Panel data ={right_panel_data}/>
    </div>
  )
}
