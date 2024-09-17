import { useEffect, useState } from "react";
import DaysHoursResponseType from "../types/DaysHoursResponseType";
import formatDate from "../utils/formatDate";
import getDatesForMonthlyView from "../utils/getDatesForMonthlyView";
import { getUserIdFromToken } from "../utils/getTokenData";

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
        const userId = getUserIdFromToken();
        if (userId === undefined) {
          throw new Error("Invalid token");
        }
        const params = new URLSearchParams({
          userId: userId,
          startDate: formatDate(startDate),
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
