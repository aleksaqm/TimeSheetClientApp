import { useEffect, useState } from "react";
import { useData } from "../hooks/DataContext";
import ProjectType from "../types/ProjectType";
import ClientType from "../types/ClientType";
import TeamMemberType from "../types/TeamMemberType";
import getAll from "../services/getAllService";
import TextInput from "./TextInput";
import DropDownList from "./DropDownList";
import updateRequest from "../services/updateService";
import deleteRequest from "../services/deleteService";
import { ToastContainer } from "react-toastify";

interface Props {
  item: ProjectType;
}

const ProjectDetails = ({ item }: Props) => {
  const { fetchData } = useData<ProjectType>();
  const [clients, setClients] = useState<ClientType[]>([]);
  const [members, setMembers] = useState<TeamMemberType[]>([]);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [selectedClient, setSelectedClient] = useState<string>(item.customer);
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<string>(item.lead);
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
  const [status, setStatus] = useState(item.status);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsData = await getAll<ClientType[]>(
          "https://localhost:7138/api/Client"
        );
        setClients(clientsData);

        const teamMembersData = await getAll<TeamMemberType[]>(
          "https://localhost:7138/api/TeamMember"
        );
        setMembers(teamMembersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const clientOptions = clients.map((client, index) => ({
    key: index,
    value: client.name,
  }));

  const memberOptions = members.map((member, index) => ({
    key: index,
    value: member.name,
  }));

  const clientChanged = (value: string, index: number) => {
    setSelectedClient(value);
    setSelectedClientIndex(index);
  };

  const memberChanged = (value: string, index: number) => {
    setSelectedMember(value);
    setSelectedMemberIndex(index);
  };

  const updateProject = () => {
    //env fajl
    updateRequest("https://localhost:7138/api/Project", {
      id: item.id,
      name: name,
      description: description,
      customerId: clients[selectedClientIndex].id,
      leadId: members[selectedMemberIndex].id,
      status: status,
    })
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.error("Error during update:", err);
      });
  };

  const deleteProject = () => {
    deleteRequest("https://localhost:7138/api/Project", item.id)
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
              labelText="Project name:"
              handleChange={(value) => setName(value)}
            ></TextInput>
          </li>
          <li>
            <DropDownList
              labelText="Lead:"
              options={memberOptions}
              selected={selectedMember}
              handleChange={memberChanged}
            ></DropDownList>
          </li>
        </ul>
        <ul className="form">
          <li>
            <TextInput
              type="text"
              name=""
              value={description}
              className="in-text"
              labelText="Description:"
              handleChange={(value) => setDescription(value)}
            ></TextInput>
          </li>
        </ul>
        <ul className="form last">
          <li>
            <DropDownList
              labelText="Customer:"
              options={clientOptions}
              selected={selectedClient}
              handleChange={clientChanged}
            ></DropDownList>
          </li>
          <li className="inline">
            <label>Status:</label>
            <span className="radio">
              <label htmlFor="inactive">Active:</label>
              <input
                type="radio"
                id="Inactive"
                value="Inactive"
                checked={status === "Inactive"}
                onChange={() => setStatus("Inactive")}
              />
            </span>
            <span className="radio">
              <label htmlFor="active">Inactive:</label>
              <input
                type="radio"
                id="Active"
                value="Active"
                checked={status === "Active"}
                onChange={() => setStatus("Active")}
              />
            </span>
            <span className="radio">
              <label htmlFor="active">Archive:</label>
              <input
                type="radio"
                id="Archive"
                value="Archive"
                checked={status === "Archive"}
                onChange={() => setStatus("Archive")}
              />
            </span>
          </li>
        </ul>
        <div className="buttons">
          <div className="inner">
            <a onClick={updateProject} href="" className="btn green">
              Save
            </a>
            <a onClick={deleteProject} href="" className="btn red">
              Delete
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProjectDetails;
