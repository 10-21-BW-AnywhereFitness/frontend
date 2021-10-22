export const API_URL_BASE = "https://buildweek-backend-10-21.herokuapp.com";
export const PATH_REGISTER = "/api/auth/register";
export const PATH_LOGIN = "/api/auth/login";
export const PATH_PUBLIC_GET_CLASSES = "/api/client/public/classes";
export const PATH_CLIENT_GET_CLASSES = "/api/client/classes/";
export const PATH_CLIENT_RESERVED_CLASSES = `/api/client/${getUserID()}/classes`;

export const PATH_INSTRUCTOR_ADD_CLASS = `/api/instructor/${getUserID()}/classes/`;
export const PATH_INSTRUCTOR_GET_CLASSES = `/api/instructor/${getUserID()}/classes/`;
export const PATH_INSTRUCTOR_DELETE_CLASS_BY_ID = `/api/instructor/${getUserID()}/classes/`;
export const PATH_INSTRUCTOR_GET_CLASS_BY_ID = `/api/instructor/${getUserID()}/classes/`;
export const PATH_CLIENT_GET_CLASS_BY_ID = `/api/client/classes/`;
export const PATH_CLIENT_MAKE_A_CLASS_RESERVATION = `/api/client/classes/`;
export const PATH_CLIENT_DELETE_A_CLASS_RESERVATION = `/api/client/${getUserID()}/classes/`;
//[GET] /api/client/:user_id/classes -- gets all the classes that the user has a reservation for
export const PATH_CLIENT_GET_ALL_RESERVED_CLASSES = `/api/client/${getUserID()}/classes/`;
export const PATH_CLIENT_GALL_ALL_AVAILABLE_CLASSES = `/api/client/classes`;

export function setWelcomeMessage(welcomeMessage) {
  localStorage.setItem("welcomeMessage", welcomeMessage);
}

export function getWelcomeMessage() {
  return localStorage.getItem("welcomeMessage");
}

export function setToken(tokenValue) {
  localStorage.setItem("token", tokenValue);
}
export function getToken() {
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token");
  } else {
    return "";
  }
}

export function setRole(role_id) {
  localStorage.setItem("role_id", role_id);
}

export function getRole() {
  return localStorage.getItem("role_id");
}

export function setUserID(user_id) {
  localStorage.setItem("user_id", user_id);
}

export function getUserID() {
  return localStorage.getItem("user_id");
}

export function createClientCredential(username, password) {
  return { username: username, password: password, role_id: "client" };
}

export function createInstructorCredential(username, password) {
  return { username: username, password: password, role_id: "instructor" };
}

export function getClientCredential() {
  return { username: "tomtom5", password: "tomtom5" };
}

export function getInstructorCredential() {
  return { username: "masonj", password: "masonj" };
}

export function getNewClass() {
  return {
    class_name: "class one" + JSON.stringify(Date.now()),
    // "class_name": "class one" ,
    class_type: "type one",
    class_date: "10/11/2021",
    class_time: "17:00",
    class_duration: 25,
    class_intensity: "low",
    class_location: "location one",
    class_registered_clients: 0,
    class_max: 30,
  };
}
