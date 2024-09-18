import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "./apiClient";

const deleteRequest = async (url: string, id: any) => {
  try {
    const response = await apiClient.delete(`${url}/${id}`);

    if (response.status !== 200) {
      if (response.status === 403){
        toast.error("You don't have permission to do that");
      }else{
        toast.error("Failed to delete");
      }
    } else {
      toast.success("Successfully deleted");
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete");
  }
};

export default deleteRequest;
