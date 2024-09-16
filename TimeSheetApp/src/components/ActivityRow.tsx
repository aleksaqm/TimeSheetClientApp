import { useEffect, useState } from "react";
import getAll from "../services/getAllService";
import DropDownList from "./DropDownList";
import CategoryType from "../types/CategoryType";
import ProjectType from "../types/ProjectType";
import ClientType from "../types/ClientType";
import ActivityType from "../types/ActivityType";
import TextInput from "./TextInput";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsData = await getAll<ClientType[]>(
          "https://localhost:7138/api/Client"
        );
        setClients(clientsData);

        const categoriesData = await getAll<CategoryType[]>(
          "https://localhost:7138/api/Category"
        );
        setCategories(categoriesData);

        const projectsData = await getAll<ProjectType[]>(
          "https://localhost:7138/api/Project"
        );
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

  const clientChanged = (value: string) => {};

  return (
    <>
      <tr>
        <td>
          <DropDownList
            labelText=""
            options={clientOptions}
            selected={selectedClient}
            handleChange={clientChanged}
          ></DropDownList>
        </td>
        <td>
          <DropDownList
            labelText=""
            options={projectOptions}
            selected={selectedProject}
            handleChange={(value) => console.log(value)}
          ></DropDownList>
        </td>
        <td>
          {selectedCategory === "" ? (
            <div>Undefined</div>
          ) : (
            <DropDownList
              labelText=""
              options={categoryOptions}
              selected={selectedCategory}
              handleChange={(value) => console.log(value)}
            ></DropDownList>
          )}
        </td>
        <td>
          <TextInput
            className="in-text medium"
            handleChange={(value) => console.log(value)}
            labelText=""
            name=""
            type="text"
            value={activity.description}
          ></TextInput>
        </td>
        <td className="small">
          <TextInput
            className="in-text small"
            handleChange={(value) => console.log(value)}
            labelText=""
            name=""
            type="text"
            value={activity.hours.toString()}
          ></TextInput>
        </td>
        <td className="small">
          <TextInput
            className="in-text small"
            handleChange={(value) => console.log(value)}
            labelText=""
            name=""
            type="text"
            value={activity.overtime.toString()}
          ></TextInput>
        </td>
        <td>
          <button>update </button>
        </td>
      </tr>
    </>
  );
};

export default ActivityRow;
