import React from "react";
import './ClassCard.css'
import {Link} from 'react-router-dom'

function ClassCard({info}){
    if (!info){
        return <h3>Fetching your class details</h3>
    }
    return(
        <div className='class-cont'>
            <div className='title'>
                <h2>{info.class_name}</h2>
                <h3>Type: {info.class_type}</h3>
            </div>
            <div className='time'>
                <p>Date: {info.class_date}</p>
                <p>Time: {info.class_time}</p>
            </div>
            <div className='info'>
                <p>Length: {info.class_duration}</p>
                <p>Intensity: {info.class_intensity}</p>
            </div>
                <p>Partipants: {info.class_registered_clients}/{info.class_max}</p> 
                <Link to={``}>Class info</Link>
        </div>
    )
}

export default ClassCard;