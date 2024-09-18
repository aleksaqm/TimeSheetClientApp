import { useState } from "react";
import NavBar from "../components/NavBar";
import StandardFooter from "../components/StandardFooter";
import UserSettings from "../components/UserSettings";
import chunkArray from "../utils/chunkArray";
import Calendar from "../components/Calendar";
import useFetchCalendar from "../hooks/useFetchCalendar";
import CalendarHeader from "../components/CalendarHeader";

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
            <UserSettings></UserSettings>
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
    "Activity/Hours",
    month,
    year
  );
  const weeks = chunkArray(data.dayHours, 7);

  return (
    <div className="wrapper">
      <section className="content">
        <h2>
          <i className="ico timesheet"></i>TimeSheet
        </h2>
        <CalendarHeader
          month={month}
          year={year}
          setMonth={setMonth}
          setYear={setYear}
        ></CalendarHeader>
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
