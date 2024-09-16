import Popup from "reactjs-popup";
import ActivityType from "../types/ActivityType";
import ActivityRow from "./ActivityRow";
import NewActivityPopup from "./NewActivityPopup";

interface Props {
  data: any[];
  isLoading: boolean;
  error: string | null;
}

const ActivityTable = ({ data, isLoading, error }: Props) => {
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
              <NewActivityPopup></NewActivityPopup>
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
