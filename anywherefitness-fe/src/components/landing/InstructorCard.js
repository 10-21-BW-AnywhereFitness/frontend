import React from "react";
import './ClassCard.css'
import * as api from "../../api/api_calls";

function InstructorCard({info}){
    if (!info){
        return <h3>Fetching your class details</h3>
    }
    const deleteClass = id => {
        api
        .instructor_delete_class_by_id(id)
        .then((res) => {
            console.log("instructor_delete_class_by_id res.data = ", res.data);
        })
            .catch((error) => {
            console.log("instructor_delete_class_by_id, error = ", error);
        });
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
            <div className='deleteButton'>
                <button onClick={deleteClass(info.class_id)}>Delete Class</button>
            </div>
        </div>
    )
}

export default InstructorCard;