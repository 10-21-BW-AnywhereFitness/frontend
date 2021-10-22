import React from "react";
import ClientLanding from "../landing/ClientLanding";

const Client = (props) => {
  return (
    <div>
      <ClientLanding userInfo={fakeClient} />
    </div>
  );
};

export default Client;
