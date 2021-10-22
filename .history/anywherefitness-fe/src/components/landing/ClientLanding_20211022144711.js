import React, { useEffect, useState, useContext } from "react";
import * as api from "../../api/api_calls";
import * as con from "../../constant/constant";
import ContextObject from "../../context/context";

const ClientLanding = (props) => {
  const { GlobalState } = useContext(ContextObject);
  const [allAvailableClasses, set_allAvailableClasses] = useState(null);
  const [clientReseredClasses, set_clientReservedClasses] = useState(null);

  useEffect(() => {
    api
      .client_get_all_available_classes()
      .then((res) => {
        console.log("client_get_all_available_classes res.data = ", res.data);
        set_allAvailableClasses(res.data);
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
      {allAvailableClasses === null ? <p}
      <p>
        There are {allAvailableClasses.length} classes available, please search
        them in <b>"Search Class" link</b>.
      </p>
      <p>==============Reserved Classes===============</p>
      <p>You have reserved {clientReseredClasses.length} classes.</p>
    </div>
  );
};

export default ClientLanding;
