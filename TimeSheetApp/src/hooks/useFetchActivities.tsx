import { useEffect, useState } from "react";
import formatDate from "../utils/formatDate";
import WorkDayType from "../types/WorkDayType";
import { getUserIdFromToken } from "../utils/getTokenData";
import apiClient from "../services/apiClient";

const useFetchActivities = (
  url: string,
  startDate: Date,
  endDate: Date,
  refetchKey: number
) => {
  const [data, setData] = useState<WorkDayType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Fetching activities...");

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
          throw new Error("Failed to fetch activities");
        }

        setData(response.data); // Axios automatically parses JSON
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, refetchKey, startDate, endDate]);

  return { data, isLoading, error };
};

export default useFetchActivities;
