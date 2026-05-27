import React, { useState } from "react";

const URL = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";
function useApiv2() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  getData();
  return { getData, data, error, isLoading };
}

export default useApiv2;
