import { ToastContainer } from "react-toastify";
import deleteRequest from "../services/deleteService";
import DropDownList from "./DropDownList";
import TextInput from "./TextInput";
import updateRequest from "../services/updateService";
import { useState } from "react";
import { UUID } from "crypto";
import ClientType from "../types/ClientType";
import { useData } from "../hooks/DataContext";

interface Props {
  item: {
    id: UUID;
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

const ClientDetails = ({ item }: Props) => {
  const { fetchData } = useData<ClientType>();
  const [name, setName] = useState(item.name);
  const [address, setAddress] = useState(item.address);
  const [city, setCity] = useState(item.city);
  const [country, setCountry] = useState(item.country);
  const [postalCode, setPostalCode] = useState(item.postalCode);

  const deleteClient = () => {
    deleteRequest("https://localhost:7138/api/Client", item.id)
      .then(() => {
        fetchData(); // Fetch clients after deletion is successful
      })
      .catch((err) => {
        console.error("Error during deletion:", err);
      });
  };

  const updateClient = () => {
    //env fajl
    updateRequest("https://localhost:7138/api/Client", {
      id: item.id,
      name: name,
      address: address,
      city: city,
      postalCode: postalCode,
      country: country,
    })
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.error("Error during update:", err);
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
          <li>
            <TextInput
              type="text"
              name=""
              value={postalCode}
              className="in-text"
              labelText="Zip/Postal code::"
              handleChange={(value) => setPostalCode(value)}
            />
          </li>
        </ul>
        <ul className="form">
          <li>
            <TextInput
              type="text"
              name=""
              value={address}
              className="in-text"
              labelText="Address:"
              handleChange={(value) => setAddress(value)}
            />
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
        <ul className="form last">
          <TextInput
            type="text"
            name=""
            value={city}
            className="in-text"
            labelText="City:"
            handleChange={(value) => setCity(value)}
          />
        </ul>
        <div className="buttons">
          <div className="inner">
            <a onClick={updateClient} className="btn green">
              Save
            </a>
            <a onClick={deleteClient} className="btn red">
              Delete
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ClientDetails;
