import { useState } from "react";
import NavBar from "../components/NavBar";
import ReportsHeader from "../components/ReportsHeader";
import StandardFooter from "../components/StandardFooter";
import UserSettings from "../components/UserSettings";
import ReportResponse from "../types/ReportResponse";
import ReportTable from "../components/ReportTable";
import GetReportType from "../types/GetReportType";
import ReportPrintSection from "../components/ReportPrintSection";

const ReportsPage = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="top-bar"></div>
          <div className="wrapper">
            <a href="/" className="logo">
              <img src="/logo.png" alt="VegaITSourcing Timesheet" />
            </a>
            <UserSettings></UserSettings>
            <NavBar active="Reports"></NavBar>
          </div>
        </header>
        <ReportSection></ReportSection>
        <StandardFooter></StandardFooter>
      </div>
    </>
  );
};

const ReportSection = () => {
  const [data, setData] = useState<ReportResponse>({
    reports: [],
    reportTotalHours: 0,
  });
  const [params, setParams] = useState<GetReportType>();

  return (
    <div className="wrapper">
      <section className="content">
        <h2>
          <i className="ico report"></i>Reports
        </h2>
        <ReportsHeader setData={setData} setParams={setParams}></ReportsHeader>
        {/* {data.reportTotalHours !== 0 && <div>IDEMOOOO</div>} */}
        <ReportTable reportResponse={data}></ReportTable>
        <div className="total">
          <span>
            Report total: <em>{data.reportTotalHours}</em>
          </span>
        </div>
        <ReportPrintSection getReportObject={params}></ReportPrintSection>
      </section>
    </div>
  );
};

export default ReportsPage;
