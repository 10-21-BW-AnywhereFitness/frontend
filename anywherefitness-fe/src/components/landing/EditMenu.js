import React from "react";
import "./EditMenu.css"

const EditMenu = props => {
    const { class_id, edit, remove, popupOpen } = props;

    const editOnClick = () => {
        edit(class_id);
    }

    const removeOnClick = () => {
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
                    <li onClick={editOnClick}>Edit</li>
                    <li onClick={removeOnClick}>Remove</li>
                </ul>
            </label>
        </span>
    )

}

export default EditMenu;