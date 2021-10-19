import React from "react";
import "./Popup.css";

const Popup = props => {
    const { children, trigger, open } = props;

    return trigger ? (
        <div className="popup">
            <div className="popup-inner">
                { children }
                <div className="close-btn" onClick={() => open(false)}>x</div>
            </div>
        </div>
    ) : "";
}

export default Popup