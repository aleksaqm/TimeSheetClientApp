import { createContext, useContext, useState, useEffect } from "react";
import ClientType from "../types/ClientType";

interface ClientContextType {
  clients: ClientType[];
  setClients: React.Dispatch<React.SetStateAction<ClientType[]>>;
  isLoading: boolean;
  error: string | null;
  paginationInfo: any;
  fetchClients: () => Promise<void>;
}

// Create a context
const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const ClientProvider = ({ children }: any) => {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginationInfo, setPaginationInfo] = useState(null);

  const fetchClients = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://localhost:7138/api/Client");
      if (!response.ok) {
        throw new Error("Could not fetch clients");
      }
      const paginationHeader = response.headers.get("pagination");
      const parsedPagination = paginationHeader
        ? JSON.parse(paginationHeader)
        : null;
      setPaginationInfo(parsedPagination);
      const data = await response.json();
      setClients(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <ClientContext.Provider
      value={{
        clients,
        setClients,
        isLoading,
        error,
        paginationInfo,
        fetchClients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

// Custom hook to use the client context
export const useClients = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClients must be used within a ClientProvider");
  }
  return context;
};
