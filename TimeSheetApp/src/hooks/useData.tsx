import { createContext, useContext } from "react";
import DataContextType from "../types/DataContextType";

const DataContext = createContext<DataContextType<any> | undefined>(undefined);

export const useData = <T,>(): DataContextType<T> => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context as DataContextType<T>;
};
