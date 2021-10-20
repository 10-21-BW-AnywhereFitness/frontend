import React from "react";
import "./EditMenu.css"

const EditMenu = props => {
    const { class_id, remove, popupOpen } = props;

    const removeOnlick = () => {
        remove(class_id);
    }

    let ulClassName = '';
    if (popupOpen) {
        ulClassName += 'hidden';
    }

    return (
        <span className="triple-dot">
            <button>&#10247;</button>
            <label>
                <input type="checkbox" />
                <ul className={ulClassName}>
                    <li>Edit</li>
                    <li onClick={removeOnlick}>Remove</li>
                </ul>
            </label>
        </span>
    )

}

export default EditMenu;