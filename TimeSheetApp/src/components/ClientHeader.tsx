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
