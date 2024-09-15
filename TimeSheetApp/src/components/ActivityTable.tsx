import ActivityRow from "./ActivityRow";

const ActivityTable = () => {
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
        </tr>
        <ActivityRow></ActivityRow>
        <ActivityRow></ActivityRow>
        <ActivityRow></ActivityRow>
        <ActivityRow></ActivityRow>
        <ActivityRow></ActivityRow>
        <ActivityRow></ActivityRow>
        <ActivityRow></ActivityRow>
      </table>
    </>
  );
};

export default ActivityTable;
