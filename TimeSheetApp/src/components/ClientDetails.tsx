import { ToastContainer } from "react-toastify";
import deleteRequest from "../services/deleteService";
import DropDownList from "./DropDownList";
import TextInput from "./TextInput";
import updateRequest from "../services/updateService";
import { useState } from "react";
import { useClients } from "../hooks/useClients";

interface Props {
  client: {
    id: any;
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

const ClientDetails = ({ client }: Props) => {
  const { fetchClients } = useClients();
  const [name, setName] = useState(client.name);
  const [address, setAddress] = useState(client.address);
  const [city, setCity] = useState(client.city);
  const [country, setCountry] = useState(client.country);
  const [postalCode, setPostalCode] = useState(client.postalCode);

  const deleteClient = () => {
    deleteRequest("https://localhost:7138/api/Client", client.id, fetchClients); //.then(()=>
    // getClients())
  };

  const updateClient = () => {
    //env fajl
    updateRequest("https://localhost:7138/api/Client", {
      id: client.id,
      name: name,
      address: address,
      city: city,
      postalCode: postalCode,
      country: country,
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
