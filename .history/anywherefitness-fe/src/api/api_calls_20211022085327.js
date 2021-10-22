import axios from "axios";
import * as con from "../constant/constant";

const axiosWithAuth = () => {
  return axios.create({
    baseURL: con.API_URL_BASE,
    headers: {
      authorization: con.getToken(),
    },
  });
};

export const API_CALL_registerUser = (credential) => {
  return axios.post(con.API_URL_BASE + con.PATH_REGISTER, credential);
};

export const API_Call_loginService = (credential) => {
  console.log(
    "con.API_URL_BASE + con.PATH_LOGIN = ",
    con.API_URL_BASE + con.PATH_LOGIN
  );
  return axios.post(con.API_URL_BASE + con.PATH_LOGIN, credential);
};

export const API_Call_logoutService = () => {
  con.setToken("");
  con.setRole("");
  con.setUserID("");
  con.setWelcomeMessage("");
};

//==================================================================
export const client_make_a_reservation_by_id = (id) => {
  console.log(
    "PATH_CLIENT_MAKE_A_CLASS_RESERVATION + id =",
    PATH_CLIENT_MAKE_A_CLASS_RESERVATION + id
  );
  return axiosWithAuth().post(con.PATH_CLIENT_MAKE_A_CLASS_RESERVATION + id);
};

export const instructor_add_one_class = (object) => {
  return axiosWithAuth().post(con.PATH_INSTRUCTOR_ADD_CLASS, object);
};

//==================================================================
export const client_get_class_by_id = (id) => {
  return axiosWithAuth().get(con.PATH_CLIENT_GET_CLASSES + id);
};

export const instructor_get_class_by_id = (id) => {
  return axiosWithAuth().get(con.PATH_INSTRUCTOR_GET_CLASS_BY_ID + id);
};

//=================================================================
export const client_get_all_available_classes = () => {
  return axiosWithAuth().get(con.PATH_CLIENT_GALL_ALL_AVAILABLE_CLASSES);
};

export const client_get_one_reserved_class_by_id = (id) => {
  return axiosWithAuth().get(con.PATH_CLIENT_GET_ALL_RESERVED_CLASSES + id);
};

export const client_get_all_reserved_classes = () => {
  return axiosWithAuth().get(con.PATH_CLIENT_GET_ALL_RESERVED_CLASSES);
};

export const instructor_get_all_classes = () => {
  return axiosWithAuth().get(con.PATH_INSTRUCTOR_GET_CLASSES);
};

//=================================================================
// export const API_Call_updateByID = (PATH_UPDATE, ID, object) => {
//   return axiosWithAuth().put(PATH_UPDATE + ID, object);
// };

//============================================================
export const client_delete_reservation_by_id = (id) => {
  return axiosWithAuth().delete(
    con.PATH_CLIENT_DELETE_A_CLASS_RESERVATION + id
  );
};

export const instructor_delete_class_by_id = (id) => {
  return axiosWithAuth().delete(con.PATH_INSTRUCTOR_DELETE_CLASS_BY_ID + id);
};

export const API_Get_Classes_From_masonj = () => {
  return axios
    .post(con.API_URL_BASE + con.PATH_LOGIN, {
      username: "masonj",
      password: "masonj",
    })
    .then((res) => {
      return axios
        .create({
          baseURL: con.API_URL_BASE,
          headers: {
            authorization: res.data.token,
          },
        })
        .get(`/api/instructor/${res.data.user_id}/classes`);
    })
    .catch((error) => {
      console.log("fail to get data from masonj");
    });
};
