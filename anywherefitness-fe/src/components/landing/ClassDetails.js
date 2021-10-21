import EditMenu from "./EditMenu";

const ClassDetails = props => {
    const { _class, instructor, edit, remove, popupOpen } = props;

    const time12hr = time => {
        let hours = parseInt(time.substring(0, 2));
        const suffix = hours >= 12 ? 'PM' : 'AM';
        hours = ((hours + 11) % 12 + 1);
        hours = hours >= 10 ? hours : '0' + hours;
        const newTime = hours + time.substring(2, 5) + ' ' + suffix;
        return newTime
    }

    const time = time12hr(_class.class_time);

    return (
        <div>
            <h3>{_class.class_name}</h3>
            {/* edit/remove dropdown menu to be added */}
            {instructor && <EditMenu class_id={_class.class_id} edit={edit} remove={remove} popupOpen={popupOpen} />}
            <p>{_class.class_type}</p>
            <p>Date: {new Date(_class.class_date).toLocaleDateString('en-US')}</p>
            <p>Starts at: {time}</p>
            {_class.class_duration && <p>Duration: {_class.class_duration} minutes</p>}
            <p>Participants: {_class.class_registered_clients}</p>
            {_class.class_max && <p>Capacity: {_class.class_max}</p>}
        </div>
    )
}

export default ClassDetails;
