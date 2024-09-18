import generateFile from "../services/pdfService";
import GetReportType from "../types/GetReportType";

interface Props {
  getReportObject: GetReportType | undefined;
}

const ReportPrintSection = ({ getReportObject }: Props) => {
  const createPdf = async () => {
    if (getReportObject !== undefined) {
      await generateFile("Report/Pdf", getReportObject, "pdf");
    }
  };

  const exportToExcel = async () => {
    if (getReportObject !== undefined) {
      await generateFile("Report/Excel", getReportObject, "xlsx");
    }
  };

  return (
    <>
      <div className="grey-box-wrap reports">
        <div className="btns-inner">
          <button className="btn white">
            <span>Print report</span>
          </button>
          <button onClick={createPdf} className="btn white">
            <span>Create PDF</span>
          </button>
          <button onClick={exportToExcel} className="btn white">
            <span>Export to excel</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReportPrintSection;
