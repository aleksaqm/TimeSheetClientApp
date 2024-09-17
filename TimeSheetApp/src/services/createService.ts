import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "./apiClient";


const createRequest = (url: string, object: any) => {
    return apiClient.post(url, object)
      .then(response => {
        toast.success("Successfully created");
        return response.data;
      })
      .catch(error => {
        toast.error("Failed to create");
        console.error(error);
      });
  };

export default createRequest;