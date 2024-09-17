import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContext = {
  authToken?: string | null;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authToken, setAuthToken] = useState<string | null>();
  const navigate = useNavigate();

  const loginRequest = async (url: string, email: string, password: string) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const token = await response.text();
      return token;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  async function handleLogin(email: string, password: string) {
    try {
      const token = await loginRequest(
        "https://localhost:7138/api/Account/Login",
        email,
        password
      );

      console.log("Received token:", token);
      setAuthToken(token);

      navigate("/timesheet");
    } catch {
      setAuthToken(null);
    }
  }

  async function handleLogout() {
    setAuthToken(null);
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
