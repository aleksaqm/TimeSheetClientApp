import React from "react";
import QueryParamsType from "./QueryParamsType";
import PaginationType from "./PaginationType";

interface DataContextType<T> {
    data: T[];
    setData: React.Dispatch<React.SetStateAction<T[]>>;
    isLoading: boolean;
    error: string | null;
    paginationInfo?: PaginationType;
    fetchData: () => Promise<void>;
    queryParams?: QueryParamsType
    setQueryParams: React.Dispatch<React.SetStateAction<QueryParamsType>>;
  }

export default DataContextType;