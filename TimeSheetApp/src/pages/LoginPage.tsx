import { useState } from "react";
import TextInput from "../components/TextInput";
import { useAuth } from "../auth/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authToken, handleLogin, handleLogout } = useAuth();
  return (
    <>
      <div className="centered-content-wrap">
        <div className="centered-block">
          <h1>Login</h1>
          <ul>
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => setEmail(value)}
                labelText="Email: "
                name=""
                type="text"
                value={email}
              />
            </li>
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => setPassword(value)}
                labelText="Password: "
                name=""
                type="text"
                value={password}
              />
            </li>
            <li className="last">
              <span className="center">
                {authToken ? (
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <button
                    className="btn grn"
                    onClick={() => handleLogin(email, password)}
                  >
                    Login
                  </button>
                )}
                <button onClick={() => console.log(authToken)}>
                  printaj token
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
