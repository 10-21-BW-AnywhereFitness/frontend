import React from "react";
import "./dropdown.css"

const EditDropdown = props => {

    return (
        <span class="dropdown">
            <button>&#10247;</button>
            <label>
                <input type="checkbox" />
                <ul>
                    <li>Edit</li>
                    <li>Remove</li>
                </ul>
            </label>
        </span>
    )

}

export default EditDropdown;