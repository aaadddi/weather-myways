import React from 'react'

import Temploc from './Temploc'
import './CSS/rightpanel.css'
import Condition from './Condition'

export default function Right_Panel(props) {
  return (
    <div className='right_panel'>
      <div className="block">
        <Temploc data={props.data}/>
        
        <Condition data={props.data}/>
        
      </div>
    
    </div>
  )
}
