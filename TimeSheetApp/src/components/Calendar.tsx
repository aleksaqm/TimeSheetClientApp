import CalendarDay from "./CalendarDay";

interface Props {
  weeks: any[][];
  isLoading: boolean;
  error: string | null;
}

const Calendar = ({ weeks, isLoading, error }: Props) => {
  return (
    <>
      <table className="month-table">
        <tr className="head">
          <th>
            <span>monday</span>
          </th>
          <th>tuesday</th>
          <th>wednesday</th>
          <th>thursday</th>
          <th>friday</th>
          <th>saturday</th>
          <th>sunday</th>
        </tr>
        <tr className="mobile-head">
          <th>mon</th>
          <th>tue</th>
          <th>wed</th>
          <th>thu</th>
          <th>fri</th>
          <th>sat</th>
          <th>sun</th>
        </tr>
        {weeks.map((week, index) => (
          <tr key={index}>
            {isLoading && <td>Loading clients</td>}
            {error && <td>{error}</td>}
            {week.map((day, dayIndex) => (
              <CalendarDay key={dayIndex} date={day.date} hours={day.hours} />
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};

export default Calendar;
