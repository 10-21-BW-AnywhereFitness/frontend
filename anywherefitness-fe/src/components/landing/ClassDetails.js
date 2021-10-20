import EditMenu from "./EditMenu";

const ClassDetails = props => {
    const { _class, instructor, edit, remove, popupOpen } = props;

    return (
        <div>
            <h3>{_class.class_name}</h3>
            {/* edit/remove dropdown menu to be added */}
            {instructor && <EditMenu class_id={_class.class_id} edit={edit} remove={remove} popupOpen={popupOpen} />}
            <p>{_class.class_type}</p>
            <p>Date: {_class.class_date}</p>
            <p>Starts at: {_class.class_time}</p>
            {_class.class_duration && <p>Duration: {_class.class_duration} minutes</p>}
            <p>Participants: {_class.class_registered_clients}</p>
            {_class.class_max && <p>Capacity: {_class.class_max}</p>}
        </div>
    )
}

export default ClassDetails;
