import { useEffect, useState } from "react";
import getAll from "../services/getAllService";
import DropDownList from "./DropDownList";
import CategoryType from "../types/CategoryType";
import ProjectType from "../types/ProjectType";
import ClientType from "../types/ClientType";
import ActivityType from "../types/ActivityType";
import TextInput from "./TextInput";
import updateRequest from "../services/updateService";

interface Props {
  activity: ActivityType;
}

const ActivityRow = ({ activity }: Props) => {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [description, setDescription] = useState(activity.description);
  const [hours, setHours] = useState(activity.hours);
  const [overtime, setOvertime] = useState(activity.overtime);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsData = await getAll<ClientType[]>("Client");
        setClients(clientsData);

        const categoriesData = await getAll<CategoryType[]>("Category");
        setCategories(categoriesData);

        const projectsData = await getAll<ProjectType[]>("Project");
        setProjects(projectsData);

        const selectedCategoryItem = categoriesData.find(
          (category) => category.id === activity.categoryId
        );
        if (selectedCategoryItem) {
          setSelectedCategory(selectedCategoryItem.name);
        }
        const selectedClientItem = clientsData.find(
          (client) => client.id === activity.clientId
        );
        if (selectedClientItem) {
          setSelectedClient(selectedClientItem.name);
          console.log(selectedClientItem.name);
        }

        const selectedProjectItem = projectsData.find(
          (project) => project.id === activity.projectId
        );
        if (selectedProjectItem) {
          setSelectedProject(selectedProjectItem.name);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [activity.categoryId]);

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
    console.log(index);
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

  const updateActivity = () => {
    console.log(selectedCategoryIndex);
    const updatedActivity: ActivityType = {
      id: activity.id,
      categoryId: categories[selectedCategoryIndex].id,
      clientId: clients[selectedClientIndex].id,
      projectId: projects[selectedProjectIndex].id,
      date: activity.date,
      description: description,
      hours: hours,
      overtime: overtime,
      userId: activity.userId,
    };
    updateRequest("Activity", updatedActivity);
  };

  return (
    <>
      <tr>
        <td>
          {selectedClient === "" ? (
            <div>Undefined</div>
          ) : (
            <DropDownList
              labelText=""
              options={clientOptions}
              selected={selectedClient}
              handleChange={clientChanged}
            ></DropDownList>
          )}
        </td>
        <td>
          {selectedProject === "" ? (
            <div>Undefined</div>
          ) : (
            <DropDownList
              labelText=""
              options={projectOptions}
              selected={selectedProject}
              handleChange={projectChanged}
            ></DropDownList>
          )}
        </td>
        <td>
          {selectedCategory === "" ? (
            <div>Undefined</div>
          ) : (
            <DropDownList
              labelText=""
              options={categoryOptions}
              selected={selectedCategory}
              handleChange={categoryChanged}
            ></DropDownList>
          )}
        </td>
        <td>
          <TextInput
            className="in-text medium"
            handleChange={(value) => setDescription(value)}
            labelText=""
            name=""
            type="text"
            value={description}
          ></TextInput>
        </td>
        <td className="small">
          <TextInput
            className="in-text small"
            handleChange={(value) => setHours(Number(value))}
            labelText=""
            name=""
            type="number"
            value={hours}
          ></TextInput>
        </td>
        <td className="small">
          <TextInput
            className="in-text small"
            handleChange={(value) => setOvertime(Number(value))}
            labelText=""
            name=""
            type="number"
            value={overtime}
          ></TextInput>
        </td>
        <td>
          <button onClick={updateActivity}>update </button>
        </td>
      </tr>
    </>
  );
};

export default ActivityRow;
