import axios from "axios";

// create a new "instance" of axios that will have
// all our configs on it, and we will be able to use
// it in place of axios throughout our app

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://med-cabinet-2020.herokuapp.com",
    headers: {
      Authorization: token,
    }
  });
};