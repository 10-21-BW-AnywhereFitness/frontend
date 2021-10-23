import React from "react";
import context from "react-bootstrap/esm/AccordionContext";
import ContextObject from "../../context/context";

const Logout = (props) => {
  const {GlobalState} = useConext(context)
  return (
    <div>
      <h2>Logout.js</h2>
    </div>
  );
};

export default Logout;
