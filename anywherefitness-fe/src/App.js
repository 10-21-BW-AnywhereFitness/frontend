import React from "react";
import ClientLanding from "./components/landing/ClientLanding"
import InstructorLanding from "./components/landing/InstructorLanding";

//to be removed
const fakeClient = {
  "user_id": 2,
  "username": "pineapple48",
  "role_id": 1
}

//to be removed
const fakeInstructor = {
  "user_id": 3,
  "username": "instructor47",
  "role_id": 0
}

function App() {

  return (
    <div className="App">
      <InstructorLanding userInfo={fakeInstructor} />
    </div>
  );
}

export default App;
