import { useEffect, useReducer } from "react";

const initialValue = {
  // loading, success, failed
  status: "",
  data: [],
  error: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, status: "loading" };
    case "success":
      return { status: "success", data: action.payload };
    case "error":
      return { ...state, status: "failed", error: action.payload };
    default:
      return { ...state };
  }
}
function useApi(URL) {
  const [{ status, data }, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    dispatch({ type: "start" });
    const handleFetch = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        dispatch({ type: "success", payload: data });
      } catch (err) {
        dispatch({ type: "failed", payload: err.message });
        throw new Error("Failed to fecth data");
      }
    };
    handleFetch();
  }, [URL]);

  return { status, data };
}

export default useApi;
