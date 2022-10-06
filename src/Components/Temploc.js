import React from 'react'
import './CSS/temploc.css'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import AirIcon from '@mui/icons-material/Air';
export default function Temploc(props) {
  const details = props.data;
  return (
    <div className='temp_loc'>

      <div className="temp_desc">
        <h2>{details.condition.temp}&deg; {details.units.temperature}</h2>
        <div className="con">
        <h5>{details.condition.text}</h5> <AirIcon className='airicon'/>
        </div>
      </div>
      <div className="loc">

      <h4>{details.location.city} ,{details.location.region}</h4>
        <div className="con">
        <h5>{details.location.country}</h5>
        <LocationOnOutlinedIcon className='locicon'/>
        </div>
      </div>

      <div className="ti">
       
        <div className="ia">        
        <h5>{details.astronomy.sunrise}</h5>
        <LightModeOutlinedIcon className='sunicon'/>
        </div>
        <div className="ia">
        <h5>{details.astronomy.sunset}</h5>
        <WbTwilightOutlinedIcon className='sundown'/>
        
        </div>
        </div>


       
    
   

          
    </div>
  )
}
