import React from "react";

const ClassDetails = props => {
    const { _class } = props;

    return (
        <div>
            <h3>{_class.class_name}</h3>
            <p>{_class.class_type}</p>
            <p>Date: {_class.class_date}</p>
            <p>Starts at: {_class.class_time}</p>
            <p>Participants: {_class.class_registered_clients}</p>
        </div>
    )
}

export default ClassDetails;