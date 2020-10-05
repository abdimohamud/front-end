import React from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
//Register user...
export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";
//Login user...
export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const registerUser = (user, push) => (dispatch) => {
    dispatch({ type: REGISTER_USER_START });
    console.log(user)
    axiosWithAuth()
      .post("/api/register", user)
      .then((res) => {
        console.log(res)
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data.data });
        // localStorage.setItem("token", res.data.token);
        // localStorage.setItem("firstname", res.data.data.firstname);
        // localStorage.setItem("lastname", res.data.data.lastname);
        // localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("username", res.data.data.username);
        localStorage.setItem("password", res.data.data.password);
        push("/Login");
      })
      .catch((err) => {
        dispatch({ type: REGISTER_USER_FAILURE });
        console.log(err);
      });
  };



  export const loginUser = (credentials, push) => (dispatch) => {
    dispatch({ type: LOGIN_USER_START });
    console.log(credentials);
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.id });
        console.log("Login", res.data);
        localStorage.setItem("token", res.data.token);
        push("/StrainList");
      })
      .catch((err) => {
        dispatch({ type: LOGIN_USER_FAILURE });
      });
  };

