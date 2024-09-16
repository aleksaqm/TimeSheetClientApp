import { useEffect, useState } from "react";
import formatDate from "../utils/formatDate";
import WorkDayType from "../types/WorkDayType";

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
    console.log("fechujemmm");

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const urlWithParams = new URL(url);
        const params = new URLSearchParams({
          userId: "820529f3-cfde-43cc-b4ea-08dcd09c0d0d",
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
        });

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
  }, [url, refetchKey]);
  return { data, isLoading, error };
};

export default useFetchActivities;
