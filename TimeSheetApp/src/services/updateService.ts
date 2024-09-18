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

    if (response.status !== 200) {
      if (response.status === 403){
        toast.error("You don't have permission to do that");
      }else{
        toast.error("Failed to update");
      }
    } else {
      toast.success("Successfully updated");
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to update");
  }
};

export default updateRequest;
