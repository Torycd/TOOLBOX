import { useEffect, useReducer } from "react";

const initialValue = {
  isLoading: false,
  data: [],
  error: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "api/loaded":
      return { ...state, isLoading: false, data: action.payload };
    case "api/error":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknow Action");
  }
}
function useApi(URL) {
  const [{ isLoading, data, error }, dispatch] = useReducer(
    reducer,
    initialValue,
  );

  useEffect(() => {
    const handleFetch = async () => {
      dispatch({ type: "loading" });
      try {
        const response = await fetch(URL);
        const data = await response.json();
        dispatch({ type: "api/loaded", payload: data });
      } catch (err) {
        dispatch({ type: "api/error", payload: err.message });
      }
    };
    handleFetch();
  }, [URL]);

  return { isLoading, data, error };
}

export default useApi;
