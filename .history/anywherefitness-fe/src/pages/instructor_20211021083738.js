import React from "react";
import InstructorLanding from "../components/landing/InstructorLanding";

const fakeInstructor = {
  user_id: 3,
  username: "instructor47",
  role_id: 0,
};

const Instructor = (props) => {
  return (
    <div>
      <InstructorLanding userInfo={fakeInstructor} />
    </div>
  );
};

export default Instructor;
