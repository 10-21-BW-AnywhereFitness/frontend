import React from "react";
import "./ClassCard.css";
import * as api from "../../api/api_calls";

function ReservedCard({ info }) {

    const cb_onClickDelete = () =>{
       
           api
              .client_delete_reservation_by_id(info.class_id)
              .then((res) => {
                console.log("client_delete_reservation_by_id res.data = ", res.data);
              })
              .catch((error) => {
                console.log("client_delete_reservation_by_id, error = ", error);
              });
          };
    }

  if (!info) {
    return <h3>Fetching your class details</h3>;
  }else{

  }

  


  
}

export default ReservedCard;
