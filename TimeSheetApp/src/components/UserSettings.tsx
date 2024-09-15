import { useState } from "react";

interface Props {
  name: string;
}

const UserSettings = ({ name }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <ul className="user right">
        <li
          onClick={() => setIsActive(!isActive)}
          //   onMouseLeave={() => setIsActive(false)}
        >
          <a
          // onMouseOver={() => setIsActive(true)}
          // onMouseOut={() => setIsActive(false)}
          // onClick={() => setIsActive(true)}
          >
            {name}
          </a>
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
          <a href="javascript:;">Logout</a>
        </li>
      </ul>
    </>
  );
};

export default UserSettings;
