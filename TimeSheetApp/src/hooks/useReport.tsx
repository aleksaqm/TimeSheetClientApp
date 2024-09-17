import { useEffect, useState } from "react";
import ReportResponse from "../types/ReportResponse";
import GetReportType from "../types/GetReportType";

const useReport = (url: string, params: GetReportType) => {
  const [data, setData] = useState<ReportResponse>({
    reports: [],
    reportTotalHours: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const urlWithParams = new URL(url);
        Object.keys(params).forEach((key) => {
          const value = params[key as keyof GetReportType];
          if (value != null) {
            urlWithParams.searchParams.append(key, value.toString());
          }
        });
        console.log(urlWithParams);
        urlWithParams.search = params.toString();

        const response = await fetch(urlWithParams.toString());
        if (!response.ok) {
          throw new Error("Failed to fetch activities");
        }

        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return { data, isLoading, error };
};

export default useReport;
