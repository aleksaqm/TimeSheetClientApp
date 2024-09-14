import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const deleteRequest = (url : string, id : any, fetchClients: () => Promise<void>) => {
    fetch(`${url}/${id}`, {
        method: "DELETE",
      })
        .then(response => {
            response.json()
            if (!response.ok){
                toast.error("Failed to delete");
            }
            else{
                console.log("uspeo")
                toast.success("Successfully deleted");
                fetchClients()
            }
        })
        // catch blok
        // loading state
        
    }
export default deleteRequest;
