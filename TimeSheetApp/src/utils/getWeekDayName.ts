
const getWeekDayName = (weekNumber: number) => {
    const monthNames = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Suturday", "Sunday"
      ];

      if (weekNumber === 0){
        weekNumber = 7;
      }
    return monthNames[weekNumber-1];
}

export default getWeekDayName;