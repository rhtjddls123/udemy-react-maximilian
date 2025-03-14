import { useEffect, useState } from "react";

export function useFetch<T>(fetchFn: () => Promise<T>, initialValue: T) {
  const [fetchedData, setFetchedData] = useState<T>(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    (async () => {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
        setIsFetching(false);
      } catch (error) {
        if (error instanceof Error) {
          setError({
            ...error,
            message: error.message || "Could not fetch data, please try again later."
          });
        }
        setIsFetching(false);
      }
    })();
  }, [fetchFn]);

  return {
    fetchedData,
    setFetchedData,
    isFetching,
    error
  };
}
