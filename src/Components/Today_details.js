import React from 'react'
import './CSS/today_details.css'
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
export default function Today_details(props) {
  const atmosphere = props.data;
  const units = props.units;

  return (
    <div className='today_details'>
       <div className="det">
            <h5 className='detname'>Wind</h5>
            <div className="iv">
            <AirOutlinedIcon className='deticon' style={{color:'rgb(112, 112, 249)'}}/>
            <h5>{props.wind.speed} {units.speed}</h5>
            </div>

        </div>
        <div className="det">
            <h5 className='detname'>Humidity</h5>
            <div className="iv">
            <OpacityOutlinedIcon className='deticon' style={{color:'blue'}}/>
            <h5>{atmosphere.humidity} {units.humidity}</h5>
            </div>

        </div> <div className="det">
            <h5 className='detname'>Visibility</h5>
            <div className="iv">
            <RemoveRedEyeOutlinedIcon className='deticon'/>
            <h5>{atmosphere.visibility}</h5>
            </div>

        </div> <div className="det">
            <h5 className='detname'>Pressure</h5>
            <div className="iv">
            <ArrowDownwardOutlinedIcon className='deticon'style={{color:'orange'}}/>
            <h5>{atmosphere.pressure}{units.pressure}</h5>
            </div>

        </div>
    </div>
  )
}
