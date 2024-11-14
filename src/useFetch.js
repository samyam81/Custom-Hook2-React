import React from "react";
import { useEffect,useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Error: ${response.statusText}");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  }, [url, options]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;