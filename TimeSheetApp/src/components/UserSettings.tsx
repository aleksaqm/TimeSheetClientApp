import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { jwtDecode } from "jwt-decode";
import JwtPayloadType from "../types/JwtPayloadType";

const UserSettings = () => {
  const [isActive, setIsActive] = useState(false);
  const { handleLogout } = useAuth();
  const authToken = localStorage.getItem("authToken");
  const [name, setName] = useState("");

  useEffect(() => {
    if (authToken) {
      const decoded: JwtPayloadType = jwtDecode<JwtPayloadType>(authToken);
      setName(decoded.unique_name);
    }
  }, []);
  const decodeToken = () => {
    console.log(authToken);
  };

  return (
    <>
      <ul className="user right">
        <li onClick={() => setIsActive(!isActive)}>
          <a>{name}</a>
          <div className="invisible"></div>
          {isActive && (
            <div className="user-menu">
              <ul>
                <li>
                  <a href="javascript:;" className="link">
                    Change password
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="link">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="link">
                    Export all data
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="last">
          <button onClick={handleLogout}>Logout</button>
        </li>
        <button onClick={decodeToken}></button>
      </ul>
    </>
  );
};

export default UserSettings;
