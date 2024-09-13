import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const deleteRequest = (url : string, id : any) => {
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
            }
        })
        // catch blok
        // loading state
        
    }
export default deleteRequest;
