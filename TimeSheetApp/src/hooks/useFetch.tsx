import { useEffect, useState } from "react";
//generic usefect type
const useFetch = <T,>(url: any) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginationInfo, setPaginationInfo] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        try {
          const paginationHeader = response.headers.get("pagination");
          const parsedPagination = paginationHeader
            ? JSON.parse(paginationHeader)
            : null;
          setPaginationInfo(parsedPagination);
        } catch {}

        return response.json();
      })

      .then((data) => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isLoading, error, paginationInfo };
};

export default useFetch;
