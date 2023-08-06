import { useCallback, useEffect, useState } from "react";

export const useFetch = (url, config) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleFetch = useCallback(async () => {
    try {
      const response = await fetch(url, config);
      if (!response.ok) throw new Error("Error en la llamada");
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (data.length === 0) handleFetch();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
