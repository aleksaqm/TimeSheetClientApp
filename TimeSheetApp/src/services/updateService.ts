import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const updateRequest = (url: string, object: any) =>{
    fetch(`${url}`, {
        method: "PUT",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then(response => {
            response.json();
            if (!response.ok){
                toast.error("Failed to update");
            }else{
                toast.success("Successfully updated");
            }
        })
}

export default updateRequest;
