import React, { useEffect } from "react";

export const getLocalState = () => {
  return localStorage.getItem("politapEndpoint");
};

export let initialState = {
  userData: {},
  isLoggedIn: false,
  pageReady: false,
};

const useController = () => {
  const persistState = (newState) => {
    localStorage.setItem("politapEndpoint", JSON.stringify(newState));
  };

  const [state, dispatch] = React.useReducer((state, value) => {
    let newState = {
      ...state,
      ...value,
    };
    persistState(newState);
    return newState;
  }, initialState);

  useEffect(() => {
    let localState = getLocalState();
    if (localState) {
      dispatch({
        ...JSON.parse(localState),
        alert: null,
        loading: false,
        pageReady: true,
      });
    } else {
      dispatch({
        pageReady: true,
      });
    }
  }, []);

  return { state, dispatch };
};

export default useController;
