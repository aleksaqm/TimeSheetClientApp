import { UUID } from "crypto";

interface TeamMemberType{
    id: UUID;
    name: string;
    username: string;
    email: string;
    hoursPerWeek: number;
    role: string;
    status: string;
}

export default TeamMemberType