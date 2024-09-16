import ActivityType from "./ActivityType";

interface WorkDayType{
    date: Date;
    totalHours: number;
    activities: ActivityType[];
}

export default WorkDayType;