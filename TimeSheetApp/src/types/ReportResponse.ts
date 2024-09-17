import ReportType from "./ReportType";

interface ReportResponse {
    reports: ReportType[],
    reportTotalHours: number
}

export default ReportResponse;