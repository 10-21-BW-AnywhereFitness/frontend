import React, { useState } from "react";
import * as api from "../../api/api_calls";

const SearchClass = (props) => {
  const [availableClasses, set_availableClasses] = useState([]);
  api
    .client_get_all_available_classes()
    .then((res) => {
      console.log("client_get_all_available_classes res.data = ", res.data);
      set_availableClasses(res.data);
    })
    .catch((error) => {
      console.log("client_get_all_available_classes, error = ", error);
    });
  return (
    <div>
      <h2>SearchClass.js</h2>
      {
          availableClasses.map()
      }
      <div>

      </div>
    </div>
  );
};

export default SearchClass;
