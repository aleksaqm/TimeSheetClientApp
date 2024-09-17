import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "./apiClient";


const updateRequest = async (url: string, object: any) => {
  try {
    const response = await apiClient.put(url, object, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200 && response.status !== 204) {
      toast.error("Failed to update");
    } else {
      toast.success("Successfully updated");
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to update");
  }
};

export default updateRequest;
