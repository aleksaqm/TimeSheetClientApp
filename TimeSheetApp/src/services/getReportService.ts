import GetReportType from "../types/GetReportType";
import ReportResponse from "../types/ReportResponse";

const generateReport = async (url: string, params: GetReportType) => {
    try {
        const urlWithParams = new URL(url);
        Object.keys(params).forEach((key) => {
          const value = params[key as keyof GetReportType];
          if (value != null) {
            urlWithParams.searchParams.append(key, value.toString());
          }
        });
        console.log(urlWithParams);

        const response = await fetch(urlWithParams.toString());
        if (!response.ok) {
          throw new Error("Failed to fetch activities");
        }

        const result = await response.json() as ReportResponse;
        return result;
      } 
    catch(error: any) {
        return null;
    } 

}

export default generateReport
