import { useState } from "react";
import TextInput from "./TextInput";
import createRequest from "../services/createService";
import TeamMemberType from "../types/TeamMemberType";
import { useData } from "../hooks/DataContext";
import { ToastContainer } from "react-toastify";

const NewTeamMemberPopup = () => {
  const { fetchData } = useData<TeamMemberType>();
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
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
      role: selectedRole,
      status: selectedStatus,
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
                <label htmlFor="inactive">Inactive:</label>
                <input
                  type="radio"
                  id="Inactive"
                  value="Inactive"
                  checked={selectedStatus === "Inactive"}
                  onChange={() => setSelectedStatus("Inactive")}
                />
              </span>
              <label htmlFor="active">Active:</label>
              <input
                type="radio"
                id="Active"
                value="Active"
                checked={selectedStatus === "Active"}
                onChange={() => setSelectedStatus("Active")}
              />
            </li>
            <li className="inline">
              <label>Role:</label>
              <span className="radio">
                <label htmlFor="admin">Admin:</label>
                <input
                  type="radio"
                  id="Admin"
                  value="Admin"
                  checked={selectedRole === "Admin"}
                  onChange={() => setSelectedRole("Admin")}
                />
              </span>
              <span className="radio">
                <label htmlFor="worker">Worker:</label>
                <input
                  type="radio"
                  id="Worker"
                  value="Worker"
                  checked={selectedRole === "Worker"}
                  onChange={() => setSelectedRole("Worker")}
                />
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
      <ToastContainer />
    </>
  );
};

export default NewTeamMemberPopup;
