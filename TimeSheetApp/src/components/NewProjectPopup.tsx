import { useEffect, useState } from "react";
import { useData } from "../hooks/DataContext";
import ClientType from "../types/ClientType";
import ProjectType from "../types/ProjectType";
import TeamMemberType from "../types/TeamMemberType";
import getAll from "../services/getAllService";
import TextInput from "./TextInput";
import DropDownList from "./DropDownList";
import createRequest from "../services/createService";

const NewProjectPopup = () => {
  const { fetchData } = useData<ProjectType>();
  const [clients, setClients] = useState<ClientType[]>([]);
  const [members, setMembers] = useState<TeamMemberType[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<string>("");
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsPromise = getAll<ClientType[]>("Client");
        const teamMembersPromise = getAll<TeamMemberType[]>("TeamMember");

        Promise.all([clientsPromise, teamMembersPromise]).then((values) => {
          setClients(values[0]);
          setMembers(values[1]);
        });
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

  const createProject = () => {
    const newProject = {
      name: name,
      description: description,
      customerId: clients[selectedClientIndex].id,
      leadId: members[selectedMemberIndex].id,
    };
    createRequest("Project", newProject)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="new-member-wrap">
        <div id="new-member" className="new-member-inner">
          <h2>Create new project</h2>
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
              <TextInput
                type="text"
                name=""
                value={description}
                className="in-text"
                labelText="Description:"
                handleChange={(value) => setDescription(value)}
              ></TextInput>
            </li>
            <li>
              <DropDownList
                labelText="Customer:"
                options={clientOptions}
                selected={selectedClient}
                handleChange={clientChanged}
              ></DropDownList>
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
          <div className="buttons">
            <div className="inner">
              <a onClick={createProject} href="" className="btn green">
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProjectPopup;
