import ActivityType from "../types/ActivityType";
import ActivityRow from "./ActivityRow";

interface Props {
  data: any[];
  isLoading: boolean;
  error: string | null;
}

const ActivityTable = ({ data, isLoading, error }: Props) => {
  // const { data, isLoading, error } = useFetchActivities(
  //   "https://localhost:7138/api/Activity/Days",
  //   date,
  //   date
  // );
  // const workDay: WorkDayType = data[0];
  // console.log(data);
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
            <button>Add new</button>
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
