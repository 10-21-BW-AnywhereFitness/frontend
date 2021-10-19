import React from "react";

function Class({info}){
    if (!info){
        return <h3>Fetching your class details</h3>
    }
    return(
        <div>
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
        </div>
    )
}

export default Class;