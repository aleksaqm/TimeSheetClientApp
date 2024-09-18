import { useState } from "react";
import TextInput from "./TextInput";
import DropDownList from "./DropDownList";
import createRequest from "../services/createService";
import { ToastContainer } from "react-toastify";
import { useData } from "../hooks/DataContext";
import ClientType from "../types/ClientType";

const NewClientPopup = () => {
  const { fetchData } = useData<ClientType>();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const addClient = () => {
    createRequest("Client", {
      name: name,
      address: address,
      city: city,
      country: country,
      postalCode: postalCode,
    }).then(() => {
      fetchData();
    });
  };

  return (
    <>
      <div>
        <div id="new-member" className="new-member-inner">
          <h2>Create new client</h2>
          <ul className="form">
            <li>
              <TextInput
                type="text"
                name=""
                value={name}
                className="in-text"
                labelText="Client name:"
                handleChange={(value) => setName(value)}
              ></TextInput>
            </li>
            <li>
              <TextInput
                type="text"
                name=""
                value={address}
                className="in-text"
                labelText="Address:"
                handleChange={(value) => setAddress(value)}
              ></TextInput>
            </li>
            <li>
              <TextInput
                type="text"
                name=""
                value={city}
                className="in-text"
                labelText="City:"
                handleChange={(value) => setCity(value)}
              ></TextInput>
            </li>
            <li>
              <TextInput
                type="text"
                name=""
                value={postalCode}
                className="in-text"
                labelText="Zip/Postal code:"
                handleChange={(value) => setPostalCode(value)}
              ></TextInput>
            </li>
            <li>
              <DropDownList
                labelText="Country:"
                selected={country}
                handleChange={(value) => setCountry(value)}
                options={[
                  { key: 1, value: "Crna Gora" },
                  { key: 2, value: "Srbija" },
                ]}
              ></DropDownList>
            </li>
          </ul>
          <div className="buttons">
            <div className="inner">
              <a onClick={addClient} className="btn green">
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

export default NewClientPopup;
