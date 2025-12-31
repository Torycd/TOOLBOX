import React, { useReducer, useEffect } from "react";

const initialValue = {
  // loading, sucess, failed
  status: "",
  data: [],
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, status: "loading" };
    case "completed":
      return { ...state, status: "sucess", data: action.payload };
    case "err":
      return { ...state, status: "failed", error: action.payload };
  }
}

function useApiV1(url) {
  const [{ data, status }, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => {
    const hndleFunc = async () => {
      dispatch({ type: "start" });
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: "completed", payload: data });
      } catch (err) {
        throw new Error(err);
      }
    };
    hndleFunc();
  }, [url]);
  return { data, status };
}

export default useApiV1;
