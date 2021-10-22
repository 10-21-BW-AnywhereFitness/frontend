import React, { useState, useEffect } from "react";
import * as api from "../../api/api_calls";
import ReservedCard from "../landing/ReservedCard";
import '../landing/Search.css';

const Reserved = (props) => {
  const [availableClasses, set_availableClasses] = useState([]);

  useEffect(()=>{})
  api
    .client_get_all_reserved_classes()
    .then((res) => {
      console.log("client_get_all_reserved_classes = ", res.data);
      set_availableClasses(res.data);
    })
    .catch((error) => {
      console.log("client_get_all_reserved_classes, error = ", error);
    });
  return (
<div className='main-cont'>
            <div className='searched-cont'>
            {availableClasses
            .map((val, key) => {
                return (
                    <div className='classes-cont' key={key}>
                        <ReservedCard info={val} key={key}/>
                    </div>
                )
            })}
            </div>
        </div>
  );
};

export default Reserved;