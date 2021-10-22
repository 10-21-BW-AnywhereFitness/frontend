import React, { useEffect, useState, useContext } from "react";
import * as api from "../../api/api_calls";
import * as con from "../../constant/constant";
import ContextObject from "../../context/context";

const ClientLanding = (props) => {
  const { GlobalState, set_availableClasses, set_clientReservedClasses } =
    useContext(ContextObject);

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
        set_clientReservedClasses(res.data);
      })
      .catch((error) => {
        console.log(("client_get_all_reserved_classes, error = ", error));
      });
  }, []);

  return (
    <div className="client-landing">
      <h2 className="text-center">{con.getWelcomeMessage()}</h2>
      <h2>user_id = {con.getUserID()}!</h2>
      <p>token = {con.getToken()}</p>

      <p>===============Available Classes=============</p>
      {GlobalState.allAvailableClasses.map((each) => {
        return <p>{JSON.stringify(each)}</p>;
      })}
      <p>==============Reserved Classes===============</p>
      {GlobalState.client.map((each) => {
        return <p>{JSON.stringify(each)}</p>;
      })}
    </div>
  );
};

export default ClientLanding;
