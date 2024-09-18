const getMonday = (date: Date): Date => {
    const monday = new Date(date);
    const day = monday.getDay();
    const diff = monday.getDate() - day + (day === 0 ? -6 : 1); // Adjust when the day is Sunday
    return new Date(monday.setDate(diff));
  };

export default getMonday;