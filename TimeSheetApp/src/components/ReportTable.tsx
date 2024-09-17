import ReportResponse from "../types/ReportResponse";
import formatDate from "../utils/formatDate";

interface Props {
  reportResponse: ReportResponse;
}

const ReportTable = ({ reportResponse }: Props) => {
  return (
    <>
      <table className="default-table">
        <tr>
          <th>Date</th>
          <th>Team member</th>
          <th>Projects</th>
          <th>Categories</th>
          <th>Description</th>
          <th className="small">Time</th>
        </tr>
        {reportResponse.reports.map((report) => (
          <tr>
            <td>{formatDate(new Date(report.date))}</td>
            <td>{report.teamMember}</td>
            <td>{report.project}</td>
            <td>{report.category}</td>
            <td>{report.description}</td>
            <td className="small">{report.time}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default ReportTable;
