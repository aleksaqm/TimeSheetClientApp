import Popup from "reactjs-popup";
import TextInput from "./TextInput";
import NewClientPopup from "./NewClientPopup";

const ClientHeader = () => {
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
            handleChange={(value) => console.log(value)}
          ></TextInput>
        </div>
      </div>
    </>
  );
};

export default ClientHeader;
