import { createContext, useContext, useEffect, useState } from "react";

const URL = "url";
const ApiContext = createContext({
  Data: [],
  error: null,
  isLoading: false,
  AddApi: () => {},
});

function ApiProvider({ children }) {
  const [Data, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setDate(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    handleApi();
  });
  async function AddApi(dt) {
    try {
      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(dt),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setDate((dt) => [...data, dt]);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <ApiContext.Provider value={{ Data, isLoading, error, AddApi }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;

export function useApi() {
  const context = useContext(ApiContext);
  if (!context) return new Error("useApi must be used within a ApiProvider");
  return context;
}
