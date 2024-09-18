import { useEffect, useState } from "react";
import getAll from "../services/getAllService";
import DropDownList from "./DropDownList";
import CategoryType from "../types/CategoryType";
import ProjectType from "../types/ProjectType";
import ClientType from "../types/ClientType";
import ActivityType from "../types/ActivityType";
import TextInput from "./TextInput";
import updateRequest from "../services/updateService";
import deleteRequest from "../services/deleteService";
import { ToastContainer } from "react-toastify";

interface Props {
  activity: ActivityType;
  handleActivityDeleted: () => void;
}

const ActivityRow = ({ activity, handleActivityDeleted }: Props) => {
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
        const clientsPromise = getAll<ClientType[]>("Client");

        const categoriesPromise = getAll<CategoryType[]>("Category");

        const projectsPromise = getAll<ProjectType[]>("Project");

        Promise.all([categoriesPromise, clientsPromise, projectsPromise]).then(
          (values) => {
            setCategories(values[0]);
            const selectedCategoryItem = values[0].find(
              (category) => category.id === activity.categoryId
            );
            if (selectedCategoryItem) {
              setSelectedCategory(selectedCategoryItem.name);
            }

            setClients(values[1]);
            const selectedClientItem = values[1].find(
              (client) => client.id === activity.clientId
            );
            if (selectedClientItem) {
              setSelectedClient(selectedClientItem.name);
              console.log(selectedClientItem.name);
            }

            setProjects(values[2]);
            const selectedProjectItem = values[2].find(
              (project) => project.id === activity.projectId
            );
            if (selectedProjectItem) {
              setSelectedProject(selectedProjectItem.name);
            }
          }
        );
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

  const deleteActivity = async () => {
    await deleteRequest("Activity", activity.id);
    handleActivityDeleted();
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
        <td>
          <button onClick={deleteActivity}>delete</button>
        </td>
      </tr>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default ActivityRow;
