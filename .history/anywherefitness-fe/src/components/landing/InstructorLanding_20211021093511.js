import React, { useState, useEffect } from "react";
import {
  token,
  API_URL_BASE,
  PATH_INSTRUCTOR_GET_CLASSES,
  PATH_INSTRUCTOR_ADD_CLASS,
  PATH_INSTRUCTOR_DELETE_CLASS_BY_ID,
} from "./contants";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ClassDetails from "./ClassDetails";
import Popup from "./Popup";
import ClassForm from "./ClassForm";

// import SearchPage

//to be removed
const fakeTeachingClasses = [
  {
    user_id: 4,
    class_id: 3,
    class_name: "Ride through the Alps",
    class_type: "Spin",
    class_date: "2021-10-15T07:00:00.000Z",
    class_time: "09:00:00",
    class_duration: 60,
    class_intensity: "medium",
    class_location: "San Francisco",
    class_registered_clients: 2,
    class_max: 35,
  },
  {
    user_id: 4,
    class_id: 2,
    class_name: "Relaxing Yoga",
    class_type: "Yoga",
    class_date: "2021-10-21T07:00:00.000Z",
    class_time: "18:00:00",
    class_duration: 60,
    class_intensity: "low",
    class_location: "Berkeley",
    class_registered_clients: 3,
    class_max: 20,
  },
];

const initialClass = {
  class_name: "",
  class_type: "",
  class_date: "",
  class_time: "",
  class_duration: "",
  class_intensity: "",
  class_location: "",
  class_registered_clients: "",
  class_max: "",
};

const InstructorLanding = (props) => {
  const { username, user_id } = props.userInfo;
  const [teachingClasses, setTeachingClasses] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [newClass, setNewClass] = useState(initialClass);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .create({
        baseURL: API_URL_BASE,
        headers: {
          authorization: token,
        },
      })
      .get(PATH_INSTRUCTOR_GET_CLASSES)
      .then((res) => {
        setTeachingClasses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Testing with fake classes
    // setTeachingClasses(fakeTeachingClasses);
  }, []);

  const getClassIndex = (class_id) => {
    return teachingClasses.findIndex((aClass) => aClass.class_id === class_id);
  };

  const postNewClass = (newClassSubmit) => {
    console.log(newClassSubmit);
    axios
      .create({
        baseURL: API_URL_BASE,
        headers: {
          authorization: token,
        },
      })
      .post(PATH_INSTRUCTOR_ADD_CLASS, newClassSubmit)
      .then((res) => {
        setTeachingClasses([res.data, ...teachingClasses]);
        setNewClass(initialClass);
        setOpenPopup(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editClass = (class_id) => {
    const classes = [...teachingClasses];
    classes.splice(getClassIndex(class_id), 1, newClass);
    setTeachingClasses(classes);
    setNewClass(initialClass);
    setOpenPopup(false);
  };

  const searchOnClick = () => {
    // history.push(search page link);
  };

  const createOnClick = () => {
    setEditMode(false);
    setNewClass(initialClass);
    setOpenPopup(true);
  };

  const editOnClick = (class_id) => {
    setEditMode(true);
    setNewClass(teachingClasses[getClassIndex(class_id)]);
    setOpenPopup(true);
  };

  const onChange = (name, value) => {
    setNewClass({ ...newClass, [name]: value });
  };

  const onSubmit = (class_id) => {
    const newClassSubmit = {
      class_name: "test",
      class_type: "weight",
      class_date: newClass.class_date,
      class_time: newClass.class_time,
      class_duration: parseInt(newClass.class_duration),
      class_intensity: newClass.class_intensity,
      class_location: newClass.class_location.trim(),
      class_registered_clients: newClass.class_registered_clients
        ? parseInt(newClass.class_registered_clients)
        : 0,
      class_max: parseInt(newClass.class_max),
    };

    editMode ? editClass(class_id) : postNewClass(newClassSubmit);
  };

  const removeClass = (class_id) => {
    axios
      .create({
        baseURL: API_URL_BASE,
        headers: {
          authorization: token,
        },
      })
      .delete(PATH_INSTRUCTOR_DELETE_CLASS_BY_ID + class_id)
      .then((res) => {
        const classes = [...teachingClasses];
        classes.splice(getClassIndex(class_id), 1);
        setTeachingClasses(classes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="instructor-landing">
      <h2>Welcome {username}!</h2>
      <button onClick={searchOnClick}>Search classes</button>
      <button onClick={createOnClick}>Create a class</button>
      <Popup trigger={openPopup} open={setOpenPopup}>
        <h3>{editMode ? "Edit Class" : "Create A Class"}</h3>
        <ClassForm
          newClass={newClass}
          change={onChange}
          submit={onSubmit}
          open={setOpenPopup}
        />
      </Popup>
      <h2>Your Classes</h2>
      <div className="instructor-classes">
        {teachingClasses.length === 0 ? (
          <h2>Getting your classes...</h2>
        ) : (
          teachingClasses.map((_class) => (
            <ClassDetails
              key={_class.class_id}
              _class={_class}
              instructor={true}
              edit={editOnClick}
              remove={removeClass}
              popupOpen={openPopup}
            />
          ))
        )}
      </div>
      <div>
          <button onClick={}>Get all instructor classes</button>
      </div>
    </div>
  );
};

export default InstructorLanding;
