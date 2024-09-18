import { useState } from "react";
import { useData } from "../hooks/DataContext";
import TeamMemberType from "../types/TeamMemberType";
import TextInput from "./TextInput";
import updateRequest from "../services/updateService";
import deleteRequest from "../services/deleteService";
import { ToastContainer } from "react-toastify";

interface Props {
  item: TeamMemberType;
}

const TeamMemberDetails = ({ item }: Props) => {
  const { fetchData } = useData<TeamMemberType>();
  const [name, setName] = useState(item.name);
  const [username, setUsername] = useState(item.username);
  const [email, setEmail] = useState(item.email);
  const [hoursPerWeek, setHoursPerWeek] = useState(item.hoursPerWeek);
  const [status, setStatus] = useState(item.status);
  const [role, setRole] = useState(item.role);

  const updateMember = () => {
    updateRequest("TeamMember", {
      id: item.id,
      name: name,
      username: username,
      email: email,
      hoursPerWeek: hoursPerWeek,
      role: role,
      status: status,
    })
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.error("Error during update:", err);
      });
  };

  const deleteClient = () => {
    deleteRequest("TeamMember", item.id)
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.error("Error during deletion:", err);
      });
  };

  return (
    <>
      <div className="details">
        <ul className="form">
          <li>
            <TextInput
              type="text"
              name=""
              value={name}
              className="in-text"
              labelText="Name:"
              handleChange={(value) => setName(value)}
            />
          </li>
          <li>
            <TextInput
              type="text"
              name=""
              value={hoursPerWeek}
              className="in-text"
              labelText="Hours per week:"
              handleChange={(value) => setHoursPerWeek(Number(value))}
            />
          </li>
        </ul>
        <ul className="form">
          <li>
            <TextInput
              type="text"
              name=""
              value={username}
              className="in-text"
              labelText="Username:"
              handleChange={(value) => setUsername(value)}
            />
          </li>
          <li>
            <TextInput
              type="text"
              name=""
              value={email}
              className="in-text"
              labelText="Email:"
              handleChange={(value) => setEmail(value)}
            />
          </li>
        </ul>
        <ul className="form last">
          <li>
            <label>Status:</label>
            <span className="radio">
              <label htmlFor="inactive">Inactive:</label>
              <input
                type="radio"
                id="Inactive"
                value="Inactive"
                checked={status === "Inactive"}
                onChange={() => setStatus("Inactive")}
              />
            </span>
            <span className="radio">
              <label htmlFor="active">Active:</label>
              <input
                type="radio"
                id="Active"
                value="Active"
                checked={status === "Active"}
                onChange={() => setStatus("Active")}
              />
            </span>
          </li>
          <li>
            <label>Role:</label>
            <span className="radio">
              <label htmlFor="admin">Admin:</label>
              <input
                type="radio"
                id="Admin"
                value="Admin"
                checked={role === "Admin"}
                onChange={() => setRole("Admin")}
              />
            </span>
            <span className="radio">
              <label htmlFor="worker">Worker:</label>
              <input
                type="radio"
                id="Worker"
                value="Worker"
                checked={role === "Worker"}
                onChange={() => setRole("Worker")}
              />
            </span>
          </li>
        </ul>
        <div className="buttons">
          <div className="inner">
            <a onClick={updateMember} href="" className="btn green">
              Save
            </a>
            <a onClick={deleteClient} href="" className="btn red">
              Delete
            </a>
            <a href="" className="btn orange">
              Reset Password
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default TeamMemberDetails;
