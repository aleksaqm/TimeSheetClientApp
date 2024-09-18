// import { useLocation } from "react-router-dom";
import UserSettings from "../components/UserSettings";
import NavBar from "../components/NavBar";
import StandardFooter from "../components/StandardFooter";
import ActivityTable from "../components/ActivityTable";
import { useLocation } from "react-router-dom";
import useFetchActivities from "../hooks/useFetchActivities";
import { useState } from "react";
import getWeekDates from "../utils/getWeekDays";
import formatDate from "../utils/formatDate";
import getWeekDayName from "../utils/getWeekDayName";
import getMonday from "../utils/getMonday";

const ActivitiesPage = () => {
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
        <ActivitiesSection></ActivitiesSection>
        <StandardFooter></StandardFooter>
      </div>
    </>
  );
};

const ActivitiesSection = () => {
  const location = useLocation();
  const { date } = location.state || {};
  const currentDate = new Date(date);
  const [selectedDay, setSelectedDay] = useState(currentDate);
  const [refetchKey, setRefetchKey] = useState(0);
  const [weekStart, setWeekStart] = useState(getMonday(currentDate));
  const weekDays = getWeekDates(weekStart);

  const { data, isLoading, error } = useFetchActivities(
    "Activity/Days",
    selectedDay,
    selectedDay,
    refetchKey
  );
  const handleNewActivityCreated = () => {
    setRefetchKey((prevKey) => prevKey + 1);
  };

  const changeDay = (day: Date) => {
    setSelectedDay(day);
    setRefetchKey((prevKey) => prevKey + 1);
  };

  const handlePreviousWeek = (e: React.MouseEvent) => {
    e.preventDefault();
    const newWeekStart = new Date(weekStart);
    newWeekStart.setDate(weekStart.getDate() - 7);
    console.log(newWeekStart);
    setWeekStart(newWeekStart);
    setSelectedDay(newWeekStart);
    setRefetchKey((prevKey) => prevKey + 1);
  };

  const handleNextWeek = (e: React.MouseEvent) => {
    e.preventDefault();
    const newWeekStart = new Date(weekStart);
    newWeekStart.setDate(weekStart.getDate() + 7);
    setWeekStart(newWeekStart);
    setSelectedDay(newWeekStart);
    setRefetchKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico timesheet"></i>TimeSheet
          </h2>

          <div className="grey-box-wrap">
            <div className="top">
              <a onClick={handlePreviousWeek} href="" className="prev">
                <i className="zmdi zmdi-chevron-left"></i>
                previous week
              </a>
              <span className="center">
                {formatDate(weekDays[0])} -/- {formatDate(weekDays[6])}
              </span>
              <a onClick={handleNextWeek} href="" className="next">
                next week<i className="zmdi zmdi-chevron-right"></i>
              </a>
            </div>
            <div className="bottom">
              <ul className="days">
                {weekDays.map((day) => (
                  <li
                    className={
                      day.toDateString() === selectedDay.toDateString()
                        ? "active"
                        : ""
                    }
                  >
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        changeDay(day);
                      }}
                      href=""
                    >
                      <b>{formatDate(day)}</b>
                      <span>{getWeekDayName(day.getDay())}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ActivityTable
            data={data}
            isLoading={isLoading}
            error={error}
            date={selectedDay}
            handleNewActivityCreated={handleNewActivityCreated}
          ></ActivityTable>
          <div className="total">
            <a href="/timesheet">
              <i></i>back to monthly view
            </a>
            {isLoading ? (
              <span>
                Total hours: <em>7.5</em>
              </span>
            ) : (
              <span>
                Total hours: <em>{data[0].totalHours}</em>
              </span>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ActivitiesPage;
