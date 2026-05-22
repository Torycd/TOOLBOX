import { useEffect, useReducer } from "react";

const URL = "";
const initialState = {
  status: "",
  data: [],
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, status: "loading" };
    case "success":
      return { status: "sucess", data: action.payload, error: null };
    case "error":
      return { ...state, status: "failed", error: action.payload };
  }
}
function useReducerTest() {
  const [{ status, data }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "start" });
    const handleApi = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        dispatch({ type: "success", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: error });
        throw new Error("Failed to fecth data");
      }
    };
    handleApi();
  }, []);
  return { status, data };
}

export default useReducerTest;
