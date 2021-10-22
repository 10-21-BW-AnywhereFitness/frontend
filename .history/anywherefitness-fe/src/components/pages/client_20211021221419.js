import React from "react";
import ClientLanding from "../landing/ClientLanding";
import {getUse} from "../../constant/constant"

const fakeClient = {
  user_id: 2,
  username: "pineapple48",
  role_id: 1,
};

const Client = (props) => {
  return (
    <div>
      <p>Welsome {}</p>
      <ClientLanding userInfo={fakeClient} />
    </div>
  );
};

export default Client;
