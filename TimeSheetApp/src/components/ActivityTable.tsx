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
  handleNewActivityCreated: () => void;
}

const ActivityTable = ({
  data,
  isLoading,
  error,
  date,
  handleNewActivityCreated,
}: Props) => {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsPromise = getAll<ClientType[]>("Client");
        const categoriesPromise = getAll<CategoryType[]>("Category");
        const projectsPromise = getAll<ProjectType[]>("Project");
        Promise.all([clientsPromise, categoriesPromise, projectsPromise]).then(
          (values) => {
            setClients(values[0]);
            setCategories(values[1]);
            setProjects(values[2]);
          }
        );
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
                handleNewActivityCreated={handleNewActivityCreated}
              ></NewActivityPopup>
            </Popup>
          </th>
        </tr>

        {isLoading ? (
          <tr>Loading clients</tr>
        ) : (
          data[0].activities.map((activity: ActivityType) => (
            <ActivityRow
              activity={activity}
              handleActivityDeleted={handleNewActivityCreated}
            ></ActivityRow>
          ))
        )}
        {error && <tr>{error}</tr>}
      </table>
    </>
  );
};

export default ActivityTable;
