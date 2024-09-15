import { Link } from "react-router-dom";

interface Props {
  date: Date;
  hours: number;
}

const CalendarDay = ({ date, hours }: Props) => {
  date = new Date(date);
  return (
    <>
      <td
        className={
          date > new Date()
            ? "disable"
            : hours === 0
            ? ""
            : hours < 7
            ? "negative"
            : "positive"
        }
      >
        <div className="date">
          <span>{date.getDate()}.</span>
        </div>
        <div className="hours">
          <Link to="/activities" state={{ date }}>
            Hours: <span>{hours}</span>
          </Link>
        </div>
      </td>
    </>
  );
};

export default CalendarDay;
