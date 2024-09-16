function getWeekDates(date: Date): Date[] {
    const startOfWeek = new Date(date);
    let dayOfWeek = startOfWeek.getDay(); // 0 is Sunday, 1 is Monday, etc.
    
    // Adjust if dayOfWeek is Sunday (0) to be the last day of the week
    if (dayOfWeek === 0) {
        dayOfWeek = 7; // Treat Sunday as the 7th day of the week
    }
    
    // Calculate the Monday of the current week
    startOfWeek.setDate(startOfWeek.getDate() - (dayOfWeek - 1));

    const weekDates: Date[] = [];
    
    // Add all days in the week (7 days)
    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startOfWeek);
        currentDate.setDate(startOfWeek.getDate() + i);
        weekDates.push(currentDate);
    }
    
    return weekDates;
}

export default getWeekDates;