import { UUID } from "crypto";

interface GetReportType{
    teamMemberId : string | null,
    clientId : UUID | null,
    projectId : UUID | null,
    categoryId : UUID | null,
    startDate: string,
    endDate: string
}

export default GetReportType;   