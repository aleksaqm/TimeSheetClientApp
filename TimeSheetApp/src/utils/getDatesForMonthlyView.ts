
const getDatesForMonthlyView = (month: number, year: number) => {
    let startDate = new Date(year, month, 1);
    let endDate = new Date(year, month + 1, 0)

    while(startDate.getDay() != 1){
        startDate.setDate(startDate.getDate() - 1);
    }
    while(endDate.getDay() != 0){
        endDate.setDate(endDate.getDate() + 1);
    }

    return {startDate, endDate}
}

export default getDatesForMonthlyView