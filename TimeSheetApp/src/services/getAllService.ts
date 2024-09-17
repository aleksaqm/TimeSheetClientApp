import apiClient from "./apiClient";

const getAll = async <T>(url: string): Promise<T> => {
    try {
      const response = await apiClient.get<T>(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Could not fetch data");
    }
  }; 

export default getAll;