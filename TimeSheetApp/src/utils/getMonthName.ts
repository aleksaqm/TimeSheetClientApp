
const getMonthName = (monthNumber: number) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];
      
    return monthNames[monthNumber];
}

export default getMonthName