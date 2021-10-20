import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ClassDetails from "./ClassDetails";
import Popup from "./Popup";
import CreateClassForm from "./CreateClassForm";

// import SearchPage

//to be removed
const fakeTeachingClasses = [
    {
        "user_id": 4,
        "class_id": 3,
        "class_name": "Ride through the Alps",
        "class_type": "Spin",
        "class_date": "2021-10-15T07:00:00.000Z",
        "class_time": "09:00:00",
        "class_duration": 60,
        "class_intensity": "medium",
        "class_location": "San Francisco",
        "class_registered_clients": 2,
        "class_max": 35
    },
    {
        "user_id": 4,
        "class_id": 2,
        "class_name": "Relaxing Yoga",
        "class_type": "Yoga",
        "class_date": "2021-10-21T07:00:00.000Z",
        "class_time": "18:00:00",
        "class_duration": 60,
        "class_intensity": "low",
        "class_location": "Berkeley",
        "class_registered_clients": 3,
        "class_max": 20
    }
]

const initialClass = {
    "class_name": "", 
    "class_type": "", 
    "class_date": "", 
    "class_time": "", 
    "class_duration": "", 
    "class_description": "",
    "class_intensity": "", 
    "class_location": "",
    "class_registered_clients": "",
    "class_max": ""
}

const InstructorLanding = props => {
    const { username, user_id } = props.userInfo;
    const [teachingClasses, setTeachingClasses] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [newClass, setNewClass] = useState(initialClass);

    useEffect(() => {
        // axios.get(`https://buildweek-backend-10-21.herokuapp.com/api/instructor/${user_id}/classes`)
        //     .then(res => {
        //         setTeachingClasses(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })

        // Testing with fake classes
        setTeachingClasses(fakeTeachingClasses);
    }, [])

    const postNewClass = newClassSubmit => {
        // axios.post(`https://buildweek-backend-10-21.herokuapp.com/api/instructor/${user_id}/classes/`)
        //     .then(res => {
        //         setTeachingClasses([res.data, ...teachingClasses]);
        //     }).catch(err => {
        //         console.log(err);
        //     }).finally(() => {
        //         setNewClass(initialClass);
        //     })
    }

    const searchOnClick = () => {
        // history.push(search page link);
    }

    const createOnClick = () => {
        setOpenPopup(true);
    }

    const createOnChange = (name, value) => {
        setNewClass({ ...newClass, [name]: value });
    }

    const createOnSubmit = () => {
        const newClassSubmit = {
            "class_name": newClass.class_name.trim(), 
            "class_type": newClass.class_type.trim(), 
            "class_date": newClass.class_date, 
            "class_time": newClass.class_time, 
            "class_duration": newClass.class_duration,
            "class_description": newClass.class_description.trim(),
            "class_intensity": newClass.class_intensity, 
            "class_location": newClass.class_location.trim(),
            "class_registered_clients": newClass.class_registered_clients,
            "class_max": newClass.class_max
        }

        postNewClass(newClassSubmit);
    }

    const editClass = class_id => {

    }
    
    const removeClass = class_id => {
        // axios.delete(`https://buildweek-backend-10-21.herokuapp.com/api/instructor/${user_id}/classes/${class_id}`)
        //     .then(res => {
        //         console.log(res);
        //     }).catch(err => {
        //         console.log(err);
        //     })
        console.log(`removed ${class_id}`);
    }

    return (
        <div className="instructor-landing">
            <h2>Welcome {username}!</h2>
            <button onClick={searchOnClick}>Search classes</button>
            <button onClick={createOnClick}>Create a class</button>
            <Popup trigger={openPopup} open={setOpenPopup}>
                <CreateClassForm 
                    newClass={newClass} 
                    change={createOnChange} 
                    submit={createOnSubmit} 
                    open={setOpenPopup}
                />
            </Popup>
            <h2>Your Classes</h2>
            <div className="instructor-classes">
                {teachingClasses.length === 0
                    ? <h2>Getting your classes...</h2>
                    : teachingClasses.map(_class => (
                        <ClassDetails 
                            key={_class.class_id} 
                            _class={_class} 
                            instructor={true} 
                            edit={editClass}
                            remove={removeClass}
                            popupOpen={openPopup}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default InstructorLanding;