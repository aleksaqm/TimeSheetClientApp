import { createContext, useState, useEffect, useContext } from "react";
import DataContextType from "../types/DataContextType";
import QueryParamsType from "../types/QueryParamsType";
import PaginationType from "../types/PaginationType";

const DataContext = createContext<DataContextType<any> | undefined>(undefined);

export const DataProvider = <T,>({
  children,
  url,
}: {
  children: any;
  url: string;
}) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paginationInfo, setPaginationInfo] = useState<PaginationType>({
    PageSize: 3,
    CurrentPage: 1,
    HasNext: false,
    HasPrevious: false,
  });
  const [queryParams, setQueryParams] = useState<QueryParamsType>({
    searchText: "",
    firstLetter: "",
    pageNumber: 1,
    pageSize: 3,
  });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const urlWithParams = new URL(url);
      Object.keys(queryParams).forEach((key) => {
        const value = queryParams[key as keyof QueryParamsType];
        urlWithParams.searchParams.append(key, value.toString());
      });
      const response = await fetch(urlWithParams);
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const paginationHeader = response.headers.get("pagination");
      const parsedPagination = paginationHeader
        ? JSON.parse(paginationHeader)
        : null;
      setPaginationInfo(parsedPagination);
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        isLoading,
        error,
        paginationInfo,
        fetchData,
        setQueryParams,
        queryParams,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = <T,>(): DataContextType<T> => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context as DataContextType<T>;
};
