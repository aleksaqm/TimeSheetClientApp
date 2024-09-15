import Popup from "reactjs-popup";
import TextInput from "./TextInput";
import NewClientPopup from "./NewClientPopup";
import ClientType from "../types/ClientType";
import { useData } from "../hooks/DataContext";
import { useEffect } from "react";

const ClientHeader = () => {
  const { fetchData, setQueryParams, queryParams } = useData<ClientType>();

  useEffect(() => {
    fetchData();
  }, [queryParams]);

  const search = (value: string) => {
    setQueryParams((prevParams) => ({
      ...prevParams,
      searchText: value,
      pageNumber: 1,
    }));
  };
  return (
    <>
      <div className="grey-box-wrap reports">
        <Popup
          trigger={<a className="link new-member-popup">Create new client</a>}
          position={"right center"}
          modal
          nested
        >
          <NewClientPopup></NewClientPopup>
        </Popup>
        <div className="search-page">
          <TextInput
            value=""
            type="search"
            name="search-clients"
            className="in-search"
            labelText=""
            handleChange={(value) => search(value)}
          ></TextInput>
        </div>
      </div>
    </>
  );
};

export default ClientHeader;
