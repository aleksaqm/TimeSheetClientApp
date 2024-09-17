import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const deleteRequest = (url: string, id: any) => {
    return fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("Failed to delete");
          throw new Error("Failed to delete");
        }
        return response.json();
      })
      .then(() => {
        toast.success("Successfully deleted");
        return true;
      })
      .catch((err) => {
        console.error(err);
        toast.error("An error occurred while deleting");
        return false;
      });
  };

export default deleteRequest;
