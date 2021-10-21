import React, { useEffect, useState } from "react";
import axios from "axios";
import ClassDetails from "./ClassDetails";
import * as api from "../../api/api_calls";
// import SearchPage

//to be removed
const fakeReservedClasses = [
  {
    class_id: 1,
    reservation_id: 1,
    class_name: "Bangin' Bhangra",
    class_type: "Dance",
    class_date: "2021-10-31T07:00:00.000Z",
    class_time: "12:00:00",
    class_registered_clients: 0,
  },
  {
    class_id: 3,
    reservation_id: 4,
    class_name: "Ride through the Alps",
    class_type: "Spin",
    class_date: "2021-10-15T07:00:00.000Z",
    class_time: "09:00:00",
    class_registered_clients: 2,
  },
];

const ClientLanding = (props) => {
  const { username, user_id } = props.userInfo;
  const [reservedClasses, setReservedClasses] = useState([]);
  const [availableClasses, set_availableClasses] = useState([]);

  useEffect(() => {
    // axios.create({
    //     baseURL: API_BASE_URL,
    //     headers:{
    //         authorization:token,
    //     }
    // }).get(PATH_CLIENT_RESERVED_CLASSES)
    //     .then(res => {
    //         setReservedClasses(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // Testing with fake classes
    // setReservedClasses(fakeReservedClasses);
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
        .then((res)=>)
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
    </div>
  );
};

export default ClientLanding;
