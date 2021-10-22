import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import ClassDetails from "./ClassDetails";
import Popup from "./Popup";
import ClassForm from "./ClassForm";
import * as api from "../../api/api_calls";
import { Button, Card } from "reactstrap";

// import SearchPage

const InstructorLanding = (props) => {
  const { username, user_id } = props.userInfo;
  const [teachingClasses, setTeachingClasses] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [newClass, setNewClass] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    api
      .instructor_get_all_classes()
      .then((res) => {
        console.log("instructor_get_all_classes, res.data = ", res.data);
        setTeachingClasses(res.data);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  }, []);

  const getClassIndex = (class_id) => {
    return teachingClasses.findIndex((aClass) => aClass.class_id === class_id);
  };

  const postNewClass = (newClassSubmit) => {
    api
      .instructor_add_one_class(newClassSubmit)
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
      class_name: newClass.class_name,
      class_type: newClass.class_type,
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
    api
      .instructor_delete_class_by_id(class_id)
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
      <Link to="/search">Search classes</Link>
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
    </div>
  );
};

export default InstructorLanding;

/*

          <h2 className="text-center">Welcome {username}!</h2>
          
          <Button onClick={searchOnClick} className='btn btn-sm'>Search classes</Button>
          <Button onClick={createOnClick} className='btn btn-sm'>Create a class</Button>
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
>>>>>>> main
*/
