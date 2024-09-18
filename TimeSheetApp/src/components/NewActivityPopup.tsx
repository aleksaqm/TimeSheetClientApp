import { useState } from "react";
import CategoryType from "../types/CategoryType";
import ClientType from "../types/ClientType";
import ProjectType from "../types/ProjectType";
import DropDownList from "./DropDownList";
import TextInput from "./TextInput";
import createRequest from "../services/createService";
import formatDate from "../utils/formatDate";
import { getUserIdFromToken } from "../utils/getTokenData";

interface Props {
  clients: ClientType[];
  projects: ProjectType[];
  categories: CategoryType[];
  date: Date;
  handleNewActivityCreated: () => void;
}

const NewActivityPopup = ({
  clients,
  projects,
  categories,
  date,
  handleNewActivityCreated,
}: Props) => {
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState(0);
  const [overtime, setOvertime] = useState(0);

  const categoryOptions = categories.map((category, index) => ({
    key: index,
    value: category.name,
  }));
  const projectOptions = projects.map((project, index) => ({
    key: index,
    value: project.name,
  }));
  const clientOptions = clients.map((client, index) => ({
    key: index,
    value: client.name,
  }));

  const clientChanged = (value: string, index: number) => {
    setSelectedClient(value);
    setSelectedClientIndex(index);
  };
  const projectChanged = (value: string, index: number) => {
    setSelectedProject(value);
    setSelectedProjectIndex(index);
  };
  const categoryChanged = (value: string, index: number) => {
    setSelectedCategory(value);
    setSelectedCategoryIndex(index);
  };

  const createActivity = () => {
    const newActivity = {
      date: formatDate(date),
      clientId: clients[selectedClientIndex].id,
      categoryId: categories[selectedCategoryIndex].id,
      projectId: projects[selectedProjectIndex].id,
      description: description,
      hours: hours,
      overtime: overtime,
      userId: getUserIdFromToken(),
    };
    createRequest("Activity", newActivity)
      .then(() => {
        handleNewActivityCreated();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div id="new-member" className="new-member-inner">
        <h2>Create new activity</h2>
        <ul className="form">
          <li>
            <DropDownList
              labelText="Client:"
              options={clientOptions}
              selected={selectedClient}
              handleChange={clientChanged}
            ></DropDownList>
          </li>
          <li>
            <DropDownList
              labelText="Project:"
              options={projectOptions}
              selected={selectedProject}
              handleChange={projectChanged}
            ></DropDownList>
          </li>
          <li>
            <DropDownList
              labelText="Category:"
              options={categoryOptions}
              selected={selectedCategory}
              handleChange={categoryChanged}
            ></DropDownList>
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
            <TextInput
              type="number"
              name=""
              value={hours}
              className="in-text"
              labelText="Time:"
              handleChange={(value) => setHours(Number(value))}
            ></TextInput>
          </li>
          <li>
            <TextInput
              type="number"
              name=""
              value={overtime}
              className="in-text"
              labelText="Overtime:"
              handleChange={(value) => setOvertime(Number(value))}
            ></TextInput>
          </li>
        </ul>
        <div className="buttons">
          <div className="inner">
            <a onClick={createActivity} className="btn green">
              Save
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewActivityPopup;
