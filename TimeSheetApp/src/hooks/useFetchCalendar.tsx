import { useEffect, useState } from "react";
import DaysHoursResponseType from "../types/DaysHoursResponseType";
import formatDate from "../utils/formatDate";
import getDatesForMonthlyView from "../utils/getDatesForMonthlyView";

const useFetchCalendar = (url: string, month: number, year: number) => {
  const [data, setData] = useState<DaysHoursResponseType>({
    dayHours: [],
    totalHours: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { startDate, endDate } = getDatesForMonthlyView(month, year);
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const urlWithParams = new URL(url);
        const params = new URLSearchParams({
          userId: "1361b478-de85-4eb4-a187-08dcd677a66c", // static userId
          startDate: formatDate(startDate), // format to "YYYY-MM-DD"
          endDate: formatDate(endDate),
        });

        urlWithParams.search = params.toString();

        // Fetch data from the backend
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
  }, [url, month, year]);
  return { data, isLoading, error };
};

export default useFetchCalendar;
