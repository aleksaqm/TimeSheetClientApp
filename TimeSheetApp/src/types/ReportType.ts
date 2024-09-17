import { UUID } from "crypto";

interface ReportType{
    id: UUID,
    date: Date,
    client: string,
    project: string,
    category: string,
    description: string,
    time: number,
    teamMember: string
}

export  default ReportType;