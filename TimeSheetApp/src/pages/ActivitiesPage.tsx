// import { useLocation } from "react-router-dom";
import UserSettings from "../components/UserSettings";
import NavBar from "../components/NavBar";
import StandardFooter from "../components/StandardFooter";
import ActivityTable from "../components/ActivityTable";

const ActivitiesPage = () => {
  //   const location = useLocation();
  //   const { date } = location.state || {};
  //   const currentDate = new Date(date);

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
            <NavBar active="TimeSheet"></NavBar>
          </div>
        </header>
        <ActivitiesSection></ActivitiesSection>
        <StandardFooter></StandardFooter>
      </div>
    </>
  );
};

const ActivitiesSection = () => {
  return (
    <>
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico timesheet"></i>TimeSheet
          </h2>
          <div className="grey-box-wrap">
            <div className="top">
              <a href="" className="prev">
                <i className="zmdi zmdi-chevron-left"></i>previous week
              </a>
              <span className="center">
                February 04 - February 10, 2013 (week 6)
              </span>
              <a href="" className="next">
                next week<i className="zmdi zmdi-chevron-right"></i>
              </a>
            </div>
            <div className="bottom">
              <ul className="days">
                <li>
                  <a href="javascript:;">
                    <b>Feb 04</b>
                    <span>monday</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <b>Feb 06</b>
                    <span>tuesday</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <b>Feb 06</b>
                    <span>wednesday</span>
                  </a>
                </li>
                <li className="active">
                  <a href="javascript:;">
                    <b>Feb 07</b>
                    <span>thursday</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <b>Feb 08</b>
                    <span>friday</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <b>Feb 09</b>
                    <span>saturday</span>
                  </a>
                </li>
                <li className="last">
                  <a href="javascript:;">
                    <b>Feb 10</b>
                    <span>sunday</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ActivityTable></ActivityTable>
          <div className="total">
            <a href="index.html">
              <i></i>back to monthly view
            </a>
            <span>
              Total hours: <em>7.5</em>
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default ActivitiesPage;
