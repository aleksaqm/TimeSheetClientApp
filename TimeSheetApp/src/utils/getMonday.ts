const getMonday = (date: Date): Date => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when the day is Sunday
    return new Date(date.setDate(diff));
  };

export default getMonday;