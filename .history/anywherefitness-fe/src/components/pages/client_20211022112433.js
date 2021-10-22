import React from "react";
import ClientLanding from "../landing/ClientLanding";
import { getUserID } from "../../constant/constant";
import NavBar from "../NavBar";

const Client = (props) => {
  return (
    <div>
      <NavBar />
      <ClientLanding />
    </div>
  );
};

export default Client;
