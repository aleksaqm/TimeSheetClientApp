import { useState } from "react";
import { useData } from "../hooks/DataContext";
import CategoryType from "../types/CategoryType";
import TextInput from "./TextInput";
import { ToastContainer } from "react-toastify";
import updateRequest from "../services/updateService";
import deleteRequest from "../services/deleteService";

interface Props {
  item: CategoryType;
}

const CategoryDetails = ({ item }: Props) => {
  const { fetchData } = useData<CategoryType>();
  const [name, setName] = useState(item.name);

  const updateCategory = () => {
    updateRequest("Category", {
      id: item.id,
      name: name,
    })
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.error("Error during update:", err);
      });
  };

  const deleteCategory = () => {
    deleteRequest("Category", item.id)
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.error("Error during deletion:", err);
      });
  };

  return (
    <>
      <div className="details">
        <ul className="form">
          <li>
            <TextInput
              type="text"
              name=""
              value={name}
              className="in-text"
              labelText="Client name:"
              handleChange={(value) => setName(value)}
            />
          </li>
        </ul>
        <div className="buttons">
          <div className="inner">
            <a onClick={updateCategory} className="btn green">
              Save
            </a>
            <a onClick={deleteCategory} className="btn red">
              Delete
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CategoryDetails;
