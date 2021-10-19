import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassDetails from "./ClassDetails";

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

const InstructorLanding = props => {
    const { username, user_id } = props.userInfo;
    const [teachingClasses, setTeachingClasses] = useState([]);

    useEffect(() => {
        // axios.get(`/api/instructor/:user_id/classes`)
        //     .then(res => {
        //         setTeachingClasses(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })

        // Testing with fake classes
        setTeachingClasses(fakeTeachingClasses);
    }, [])

    const searchOnClick = () => {
        //Go to Search Page
        console.log('clicked search');;
    }

    const createOnClick = () => {
        //Create class pop-up
        console.log('creating classes');
    }

    return (
        <div className="instructor-landing">
        {/** Navbar */}
        <h2>Welcome {username}!</h2>
        <button onClick={searchOnClick}>Search classes</button>
        <button onClick={createOnClick}>Create a class</button>
        <h2>Your Classes</h2>
        <div className="instructor-classes">
            {teachingClasses.length === 0
                ? <h2>Getting your classes...</h2>
                : teachingClasses.map(_class => (
                    <ClassDetails key={_class.class_id} _class={_class} instructor={true} />
                ))
            }
        </div>
    </div>
    )
}

export default InstructorLanding;