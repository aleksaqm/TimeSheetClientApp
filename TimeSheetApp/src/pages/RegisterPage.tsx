import { useState } from "react";
import TextInput from "../components/TextInput";
import registerRequest from "../services/registerService";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(1);
  const navigate = useNavigate();

  const register = async () => {
    console.log(role);
    registerRequest(
      "Account/Register",
      name,
      username,
      email,
      password,
      role
    ).then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <div className="centered-content-wrap">
        <div className="centered-block">
          <h1>REGISTER</h1>
          <ul>
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => setName(value)}
                labelText="Name: "
                name=""
                type="text"
                value={name}
              />
            </li>
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => setUsername(value)}
                labelText="Username: "
                name=""
                type="text"
                value={username}
              />
            </li>
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
            <li>
              <label>Role: </label>
              <span className="radio">
                <label htmlFor="admin">Admin:</label>
                <input
                  type="radio"
                  id="Admin"
                  value="Admin"
                  checked={role === 0}
                  onChange={() => setRole(0)}
                />
              </span>
              <span className="radio">
                <label htmlFor="worker">Worker:</label>
                <input
                  type="radio"
                  id="Worker"
                  value="Worker"
                  checked={role === 1}
                  onChange={() => setRole(1)}
                />
              </span>
            </li>
            <li className="last">
              <span className="center">
                <button onClick={register} className="btn orange">
                  Register
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
