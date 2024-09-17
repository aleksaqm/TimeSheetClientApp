import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "./apiClient";

const deleteRequest = (url: string, id: any) => {
  return apiClient.delete(`${url}/${id}`)
    .then(response => {
      toast.success("Successfully deleted");
      console.log(response);
      return true;
    })
    .catch(error => {
      console.error(error);
      toast.error("Failed to delete");
      return false;
    });
};

export default deleteRequest;
