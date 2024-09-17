import { useEffect, useState } from "react";
import DaysHoursResponseType from "../types/DaysHoursResponseType";
import formatDate from "../utils/formatDate";
import getDatesForMonthlyView from "../utils/getDatesForMonthlyView";
import { getUserIdFromToken } from "../utils/getTokenData";
import apiClient from "../services/apiClient";

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

        const response = await apiClient.get(urlWithParams.toString());

        if (response.status !== 200) {
          throw new Error("Failed to fetch calendar data");
        }

        setData(response.data);
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
