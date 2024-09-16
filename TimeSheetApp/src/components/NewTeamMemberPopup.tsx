import { useState } from "react";
import TextInput from "./TextInput";
import createRequest from "../services/createService";
import TeamMemberType from "../types/TeamMemberType";
import { useData } from "../hooks/DataContext";

const NewTeamMemberPopup = () => {
  const { fetchData } = useData<TeamMemberType>();
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [hours, setHours] = useState(0);

  const InviteTeamMember = () => {
    createRequest("https://localhost:7138/api/TeamMember", {
      name: name,
      email: email,
      username: username,
      hoursPerWeek: hours,
      role: role,
      status: status,
    }).then(() => {
      fetchData();
    });
  };
  return (
    <>
      <div className="new-member-wrap">
        <div id="new-member" className="new-member-inner">
          <h2>Create new team member</h2>
          <ul className="form">
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => setName(value)}
                labelText="Name:"
                name=""
                type="text"
                value=""
              ></TextInput>
            </li>
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => setHours(Number(value))}
                labelText="Hours per week:"
                name=""
                type="number"
                value={0}
              ></TextInput>
            </li>
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => setUsername(value)}
                labelText="Username:"
                name=""
                type="text"
                value=""
              ></TextInput>
            </li>
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => setEmail(value)}
                labelText="Email:"
                name=""
                type="text"
                value=""
              ></TextInput>
            </li>
            <li className="inline">
              <label>Status:</label>
              <span className="radio">
                <TextInput
                  className=""
                  name="status"
                  type="radio"
                  labelText="Inactive:"
                  handleChange={(_) => setStatus("Inactive")}
                  value={0}
                  checked={status === "Inactive"}
                ></TextInput>
              </span>
              <TextInput
                className=""
                name="status"
                type="radio"
                labelText="Active:"
                handleChange={(_) => setStatus("Active")}
                value={1}
                checked={status === "Active"}
              ></TextInput>
            </li>
            <li className="inline">
              <label>Role:</label>
              <span className="radio">
                <TextInput
                  className=""
                  name="status"
                  type="radio"
                  labelText="Admin:"
                  handleChange={(_) => setRole("Admin")}
                  value={0}
                  checked={role === "Admin"}
                ></TextInput>
              </span>
              <span className="radio">
                <TextInput
                  className=""
                  name="status"
                  type="radio"
                  labelText="Worker:"
                  handleChange={(_) => setRole("Worker")}
                  value={1}
                  checked={role === "Worker"}
                ></TextInput>
              </span>
            </li>
          </ul>
          <div className="buttons">
            <div className="inner">
              <a onClick={InviteTeamMember} href="" className="btn green">
                Invite team member
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTeamMemberPopup;
