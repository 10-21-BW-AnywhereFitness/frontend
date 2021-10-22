import React, { useEffect, useState } from "react";
import ClassDetails from "./ClassDetails";
import * as api from "../../api/api_calls";

const ClientLanding = (props) => {
  const { username } = props.userInfo;
  const [reservedClasses, setReservedClasses] = useState([]);
  // const [availableClasses, set_availableClasses] = useState([]);

  useEffect(() => {
    // api
    //   .client_get_all_available_classes()
    //   .then((res) => {
    //     console.log("client_get_all_available_classes res.data = ", res.data);
    //     set_availableClasses(res.data);
    //   })
    //   .catch((error) => {
    //     console.log("client_get_all_available_classes, error = ", error);
    //   });
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

  const searchOnClick = () => {
    //Go to Search Page
    console.log("clicked search");
  };

  return (
    <div className="client-landing">
      {/** Navbar */}
      <h2>Welcome {username}!</h2>
      <button onClick={searchOnClick}>Search classes</button>
      <h2>Your Classes</h2>
      <div className="client-classes">
        {reservedClasses.length === 0 ? (
          <h2>You don't have any reservations.</h2>
        ) : (
          reservedClasses.map((_class) => (
            <ClassDetails
              key={_class.class_id}
              _class={_class}
              instructor={false}
            />
          ))
        )}
      </div>
      {/* <p>===========================================</p> */}
      {/* {availableClasses.map((each) => {
        return <p>{JSON.stringify(each)}</p>;
      })} */}
    </div>
  );
};

export default ClientLanding;
