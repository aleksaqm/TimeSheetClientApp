import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const createRequest = (url: string, object: any) =>{
    return fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
        },
      })
      .then(response => {
          response.json();
          if (!response.ok){
              toast.error("Failed to create");
          }else{
              toast.success("Successfully created");
          }
      })
}

export default createRequest;