import TextInput from "./TextInput";

const ClientHeader = () => {
  return (
    <>
      <div className="grey-box-wrap reports">
        <a href="#new-member" className="link new-member-popup">
          Create new client
        </a>
        <div className="search-page">
          <TextInput
            type="search"
            name="search-clients"
            className="in-search"
            labelText=""
          ></TextInput>
        </div>
      </div>
    </>
  );
};

export default ClientHeader;
