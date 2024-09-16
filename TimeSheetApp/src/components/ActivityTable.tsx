import Popup from "reactjs-popup";
import ActivityType from "../types/ActivityType";
import ActivityRow from "./ActivityRow";
import NewActivityPopup from "./NewActivityPopup";
import ClientType from "../types/ClientType";
import CategoryType from "../types/CategoryType";
import ProjectType from "../types/ProjectType";
import { useEffect, useState } from "react";
import getAll from "../services/getAllService";

interface Props {
  data: any[];
  isLoading: boolean;
  error: string | null;
  date: Date;
}

const ActivityTable = ({ data, isLoading, error, date }: Props) => {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <table className="default-table">
        <tr>
          <th>
            Client <em>*</em>
          </th>
          <th>
            Project <em>*</em>
          </th>
          <th>
            Category <em>*</em>
          </th>
          <th>Description</th>
          <th className="small">
            Time <em>*</em>
          </th>
          <th className="small">Overtime</th>
          <th>
            <Popup
              trigger={<button>Add New</button>}
              position={"right center"}
              modal
              nested
            >
              <NewActivityPopup
                categories={categories}
                clients={clients}
                projects={projects}
                date={date}
              ></NewActivityPopup>
            </Popup>
          </th>
        </tr>

        {isLoading ? (
          <tr>Loading clients</tr>
        ) : (
          data[0].activities.map((activity: ActivityType) => (
            <ActivityRow activity={activity}></ActivityRow>
          ))
        )}
        {error && <tr>{error}</tr>}
      </table>
    </>
  );
};

export default ActivityTable;
