import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer.js";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const handlesetAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        handlesetAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
