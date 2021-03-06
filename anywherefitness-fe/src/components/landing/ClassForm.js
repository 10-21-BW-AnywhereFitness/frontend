import React from "react";

const ClassForm = props => {
    const { newClass, change, submit, open } = props;

    const getDate = (type, value) => {
        let date = new Date();
        const offset = date.getTimezoneOffset()
        if (type === 'value') {
            if (value) {
                date = new Date(value);
            } else {
                return "";
            }
        } else if (type === 'max') {
            date.setFullYear(date.getFullYear() + 1);
        }
        const newDate = new Date(date.getTime() - (offset*60000));
        return newDate.toISOString().split('T')[0];
    }
    
    const minDate = getDate('min');
    const maxDate = getDate('max');
    const dateValue = getDate('value', newClass.class_date);

    // const getTime = () => {
    //     if (newClass.class_time === '') {
    //         return '00:00';
    //     }
    //     return newClass.class_time;
    // }

    // const classTime = getTime();

    const onChange = evt => {
        const { name, value } = evt.target;
        let newValue = value;
        if (name === 'class_date') {
            const date = new Date(value + 'T00:00:00');
            newValue = date.toLocaleDateString('en-US');
        }
        change(name, newValue);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        if (newClass.class_id){
            submit(newClass.class_id);
        } else {
            submit();
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Class Name
                    <input 
                        type="text" 
                        name="class_name"
                        maxLength="128"
                        value={newClass.class_name}
                        onChange={onChange}
                        required
                    />
                </label>
                <label>Class Type
                    <input 
                        type="text" 
                        name="class_type"
                        maxLength="32"
                        value={newClass.class_type}
                        onChange={onChange}
                        required
                    />
                </label>
                <label>Date
                    <input 
                        type="date" 
                        name="class_date"
                        value={dateValue}
                        min={minDate}
                        max={maxDate}
                        onChange={onChange}
                        required
                    />
                </label>
                <label>Time
                    <input 
                        type="time" 
                        name="class_time"
                        value={newClass.class_time}
                        onChange={onChange}
                        required
                    />
                </label>
                <label>Duration (Minutes)
                    <input 
                        type="number" 
                        name="class_duration"
                        min="15"
                        max="360"
                        value={newClass.class_duration}
                        onChange={onChange}
                        required
                    />
                </label>
                <label>Intensity
                    <select name="class_intensity" value={newClass.class_intensity} onChange={onChange} required>
                        <option value="">---Choose Intensity---</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>
                <label>Location
                    <input 
                        type="text" 
                        name="class_location"
                        maxLength="32"
                        value={newClass.class_location}
                        onChange={onChange}
                        required
                    />
                </label>
                <label>Participants (optional)
                    <input 
                        type="number" 
                        name="class_registered_clients"
                        min="0"
                        value={newClass.class_registered_clients}
                        onChange={onChange}
                    />
                </label>
                <label>Capacity
                    <input 
                        type="number" 
                        name="class_max"
                        max="300"
                        min="5"
                        value={newClass.class_max}
                        onChange={onChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
                <button onClick={() => open(false)}>Cancel</button>
            </form>
        </div>
    );
}

export default ClassForm;