import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

interface Props {
  name: string;
}

const UserSettings = ({ name }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const { authToken, handleLogout } = useAuth();
  console.log(authToken);
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
      </ul>
    </>
  );
};

export default UserSettings;
