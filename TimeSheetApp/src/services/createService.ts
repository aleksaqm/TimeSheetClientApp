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
        toast.error("You don't have permission to do that");
        console.error(error);
      });
  };

export default createRequest;