import { useState } from "react";
import NavBar from "../components/NavBar";
import StandardFooter from "../components/StandardFooter";
import UserSettings from "../components/UserSettings";
import useFetchCalendar from "../hooks/useFetchCalendar";
import chunkArray from "../utils/chunkArray";
import getMonthName from "../utils/getMonthName";
import Calendar from "../components/Calendar";

const TimeSheetPage = () => {
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
        <TimeSheetSection></TimeSheetSection>
        <StandardFooter></StandardFooter>
      </div>
    </>
  );
};

const TimeSheetSection = () => {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const { data, isLoading, error } = useFetchCalendar(
    "https://localhost:7138/api/Activity/Hours",
    month,
    year
  );
  const weeks = chunkArray(data.dayHours, 7);

  const getPreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const getNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="wrapper">
      <section className="content">
        <h2>
          <i className="ico timesheet"></i>TimeSheet
        </h2>
        <div className="grey-box-wrap">
          <div className="top">
            <a onClick={getPreviousMonth} href="" className="prev">
              <i className="zmdi zmdi-chevron-left"></i>
              previous month
            </a>
            <span className="center">
              {getMonthName(month)}, {year}
            </span>
            <a onClick={getNextMonth} href="" className="next">
              next month<i className="zmdi zmdi-chevron-right"></i>
            </a>
          </div>
          <div className="bottom"></div>
        </div>
        <Calendar weeks={weeks} isLoading={isLoading} error={error}></Calendar>
        <div className="total">
          <span>
            Total hours: <em>{data.totalHours}</em>
          </span>
        </div>
      </section>
    </div>
  );
};

export default TimeSheetPage;
