import GetReportType from "../types/GetReportType";
import ReportResponse from "../types/ReportResponse";
import apiClient from "./apiClient";

const generateReport = async (url: string, params: GetReportType) => {
  try {
    const fullUrl = import.meta.env.VITE_API_URL + url;
    
    const urlWithParams = new URL(fullUrl);
    Object.keys(params).forEach((key) => {
      const value = params[key as keyof GetReportType];
      if (value != null) {
        urlWithParams.searchParams.append(key, value.toString());
      }
    });

    console.log(urlWithParams.toString());

    const response = await apiClient.get<ReportResponse>(urlWithParams.toString());

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default generateReport
