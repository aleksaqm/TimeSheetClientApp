import { useState } from "react";
import { useData } from "../hooks/DataContext";
import CategoryType from "../types/CategoryType";
import { ToastContainer } from "react-toastify";
import TextInput from "./TextInput";
import createRequest from "../services/createService";

const NewCategoryPopup = () => {
  const { fetchData } = useData<CategoryType>();
  const [name, setName] = useState("");

  const addCategory = () => {
    createRequest("Category", {
      name: name,
    }).then(() => {
      fetchData();
    });
  };

  return (
    <>
      <div>
        <div id="new-member" className="new-member-inner">
          <h2>Create new category</h2>
          <ul className="form">
            <li>
              <TextInput
                type="text"
                name=""
                value={name}
                className="in-text"
                labelText="Category name:"
                handleChange={(value) => setName(value)}
              ></TextInput>
            </li>
          </ul>
          <div className="buttons">
            <div className="inner">
              <a onClick={addCategory} className="btn green">
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default NewCategoryPopup;
