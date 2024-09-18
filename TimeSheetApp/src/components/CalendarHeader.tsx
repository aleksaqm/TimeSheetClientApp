import getMonthName from "../utils/getMonthName";
interface Props {
  month: number;
  year: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}

const CalendarHeader = ({ month, year, setMonth, setYear }: Props) => {
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
    <>
      <div className="grey-box-wrap">
        <div className="top">
          <a onClick={getPreviousMonth} href="javascript:;" className="prev">
            <i className="zmdi zmdi-chevron-left"></i>
            previous month
          </a>
          <span className="center">
            {getMonthName(month)}, {year}
          </span>
          <a onClick={getNextMonth} href="javascript:;" className="next">
            next month<i className="zmdi zmdi-chevron-right"></i>
          </a>
        </div>
        <div className="bottom"></div>
      </div>
    </>
  );
};

export default CalendarHeader;
