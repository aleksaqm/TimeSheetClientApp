import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";

type AuthContext = {
  authToken?: string | null;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const loginRequest = async (url: string, email: string, password: string) => {
    try {
      const response = await apiClient.post(url, {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  async function handleLogin(email: string, password: string) {
    try {
      const token = await loginRequest("Account/Login", email, password);

      console.log("Received token:", token);
      setAuthToken(token);

      localStorage.setItem("authToken", token);

      navigate("/timesheet");
    } catch {
      setAuthToken(null);
    }
  }

  async function handleLogout() {
    setAuthToken(null);
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  return (
    <AuthContext.Provider
      value={{
        authToken,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used inside of a AuthProvider");
  }

  return context;
}
