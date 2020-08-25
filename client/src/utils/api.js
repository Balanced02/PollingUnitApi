import React from "react";
import AppContext from "../AppContext";
import axios from "axios";

export const SERVER_DOMAIN = "api/v1";

export const useApiCall = () => {
  const { userData, token, dispatch } = React.useContext(AppContext);
  const callApi = (url, data, method, externalResource, passedToken, type) => {
    const { user } = userData;
    if (!token && !passedToken) {
      console.log(`Calling Api ${url}`);
    }
    var axiosOptions = {
      headers: {
        // "Content-Type": "application/json",
        user: JSON.stringify(user || {}),
      },
      url: externalResource ? url : `${SERVER_DOMAIN}${url}`,
      method: method || "get",
    };
    if (type !== "file") {
      axiosOptions.headers["Content-Type"] = "application/json";
    }
    if (token || passedToken) {
      axiosOptions.headers["x-auth-token"] = `${
        passedToken ? passedToken : token
      }`;
      console.log(`Calling Secured Api ${url}`);
    }
    if (data) {
      axiosOptions.data = data;
    }
    dispatch({
      loading: true,
    });
    return new Promise(function (resolve, reject) {
      axios(axiosOptions)
        .then(({ data }) => {
          console.log(url, "success");
          dispatch({
            loading: false,
          });
          resolve(data);
        })
        .catch((error) => {
          console.log(url, "error");
          dispatch({
            loading: false,
          });
          if (error && error.response && error.response.status === 401) {
            dispatch({
              isLoggedIn: false,
            });
          }
          reject(error);
        });
    });
  };

  return {
    callApi,
  };
};
