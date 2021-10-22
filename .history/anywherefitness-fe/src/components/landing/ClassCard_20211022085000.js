import React from "react";
import './ClassCard.css'
import * as api from "../../api/api_calls";

function ClassCard({info}){
    if (!info){
        return <h3>Fetching your class details</h3>
    }else{

    }
    
    
    const reserveClass = id => {
        api
        .client_make_a_reservation_by_id(id)
        .then((res) => {
            console.log("client_make_a_reservation_by_id res.data = ", res.data);
        })
            .catch((error) => {
            console.log("client_make_a_reservation_by_id, error = ", error);
        });
    }
    
}

export default ClassCard;