import { PropsWithChildren } from "react";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const authToken = localStorage.getItem("authToken");

  if (authToken === null || authToken === undefined) {
    return <h1>Permission denied</h1>;
  }

  return children;
}
