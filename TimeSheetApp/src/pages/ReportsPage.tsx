import NavBar from "../components/NavBar";
import ReportsHeader from "../components/ReportsHeader";
import StandardFooter from "../components/StandardFooter";
import UserSettings from "../components/UserSettings";

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
            <UserSettings name="Aleksa Perovic"></UserSettings>
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
  return (
    <div className="wrapper">
      <section className="content">
        <h2>
          <i className="ico report"></i>Reports
        </h2>
        <ReportsHeader></ReportsHeader>
        <table className="default-table">
          <tr>
            <th>Date</th>
            <th>Team member</th>
            <th>Projects</th>
            <th>Categories</th>
            <th>Description</th>
            <th className="small">Time</th>
          </tr>
          <tr>
            <td>2013-02-13</td>
            <td>Slađana Miljanovic</td>
            <td>Seachange - Nitro</td>
            <td>Front-End Development</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td className="small">7.5</td>
          </tr>
          <tr>
            <td>2013-02-13</td>
            <td>Sladjana Miljanovic</td>
            <td>Seachange - Nitro</td>
            <td>Front-End Development</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td className="small">7.5</td>
          </tr>
          <tr>
            <td>2013-02-13</td>
            <td>Sladjana Miljanovic</td>
            <td>Seachange - Nitro</td>
            <td>Front-End Development</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td className="small">7.5</td>
          </tr>
        </table>
        <div className="total">
          <span>
            Report total: <em>7.5</em>
          </span>
        </div>
        <div className="grey-box-wrap reports">
          <div className="btns-inner">
            <a href="" className="btn white">
              <span>Print report</span>
            </a>
            <a href="" className="btn white">
              <span>Create PDF</span>
            </a>
            <a href="" className="btn white">
              <span>Export to excel</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportsPage;
