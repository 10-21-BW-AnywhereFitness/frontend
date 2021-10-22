import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../../api/api_calls";
import * as con from "../../constant/constant";
import SearchClass from "../pages/ClientSearch";
import Reserved from "../pages/Reserved";


const ClientLanding = (props) => {
  const [reservedClasses, setReservedClasses] = useState([]);
  const [availableClasses, set_availableClasses] = useState([]);

  useEffect(() => {
    api
      .client_get_all_available_classes()
      .then((res) => {
        console.log("client_get_all_available_classes res.data = ", res.data);
        set_availableClasses(res.data);
      })
      .catch((error) => {
        console.log("client_get_all_available_classes, error = ", error);
      });

    api
      .client_get_all_reserved_classes()
      .then((res) => {
        console.log("client_get_all_reserved_classes, res.data = ", res.data);
        setReservedClasses(res.data);
      })
      .catch((error) => {
        console.log(("client_get_all_reserved_classes, error = ", error));
      });
  }, []);

  return (
    <div className="client-landing">
      <h2>{con.getWelcomeMessage()}</h2>
      <h2>user_id = {con.getUserID()}!</h2>
      <p>token = {con.getToken()}</p>
        <div className='button-container'>
          <button>
            <Link to="/client/search">Search A Class</Link>
          </button>
          
          <button>
            <Link to="/client/reserved">Reserved Classes</Link>
          </button>
        </div>
        
        <div className='classes-container'>
          <div className='available-classes'>
          <h2>Available Classes</h2>
            {availableClasses.map((each) => {
              return <p>{JSON.stringify(each)}</p>;
            })}
          </div>

          <div className='reserved-classes'>
            <h2>Reserved Classes</h2>
              {reservedClasses.map((each) => {
                return <p>{JSON.stringify(each)}</p>;
              })}
          </div>
        </div>
    </div>
  );
};

export default ClientLanding;
