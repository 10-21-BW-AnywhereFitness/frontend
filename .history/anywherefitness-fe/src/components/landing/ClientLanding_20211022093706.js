import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../../api/api_calls";
import styled from "styled-components";
import * as con from "../../constant/constant";
import { Button, Card } from 'reactstrap';

// import SearchPage

const DIV_LINK = styled.div`
  background-color: black;
  color: blue;
`;

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
      {/** Navbar */}
<<<<<<< HEAD
      <h2>{con.getWelcomeMessage()}</h2>
      <h2>user_id = {con.getUserID()}!</h2>
      <DIV_LINK>
        <Link to="/client/search">Search classes</Link>
      </DIV_LINK>
      <DIV_LINK>
        <Link to="/client/reserved">Reserved classes</Link>
      </DIV_LINK>
      <h2>Your Classes</h2>
      {availableClasses.map((each) => {
        return <p>{JSON.stringify(each)}</p>;
      })}
      <p>===========================================</p>
      {reservedClasses.map((each) => {
        return <p>{JSON.stringify(each)}</p>;
      })}
=======
      
        <h2 className="text-center">Welcome {username}!</h2>
        <Button onClick={searchOnClick} color='secondary' size='sm'>Search Classes</Button>
        <h2 className="text-center">Your Classes</h2>
        {/* <div className="client-classes">
          {reservedClasses.length === 0 ? (
            <h2>Getting your classes...</h2>
          ) : (
            reservedClasses.map((_class) => (
              <ClassDetails
                key={_class.class_id}
                _class={_class}
                instructor={false}
              />
            ))
          )}
        </div> */}
        {availableClasses.map((each) => {
          return <p>{JSON.stringify(each)}</p>;
        })}
        <p>===========================================</p>
        {reservedClasses.map((each) => {
          return <p>{JSON.stringify(each)}</p>;
        })}
      
>>>>>>> main
    </div>
  );
};

export default ClientLanding;
