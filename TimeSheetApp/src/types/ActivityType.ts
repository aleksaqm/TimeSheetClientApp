import { UUID } from "crypto";

interface ActivityType{
    id: UUID;
    date: Date;
    clientId: UUID;
    projectId : UUID;
    categoryId: UUID;
    description: string;
    hours: number;
    overtime: number;
    userId: UUID;
}

export default ActivityType;