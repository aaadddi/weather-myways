import React, { useState } from 'react'
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import './CSS/leftpanel.css'



export default function Left_Panel(props) {

 const data = props.data;

    
  
  
  return (
    <div className='left_panel'  >
     <div className="upper_panel">
     <div className="datee">
        <TodayOutlinedIcon className='dateeicon' />
        <h4>{data.condition.date}</h4>
        </div>
     </div>
      </div>
  )
}
