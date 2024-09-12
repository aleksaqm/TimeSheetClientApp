import Accordion from "../components/Accordion";
import DropDownList from "../components/DropDownList";
import TextInput from "../components/TextInput";

const ClientsPage = () => {
  const options = [
    { key: 1, value: "Option1" },
    { key: 2, value: "Option2" },
    { key: 3, value: "Option3" },
    { key: 4, value: "Option4" },
  ];
  return (
    <>
      <div>
        <h1>Aleksa</h1>
        <TextInput
          type="text"
          name=""
          className="in-text"
          labelText={"Name: "}
        ></TextInput>
        <DropDownList labelText="some text" options={options}></DropDownList>
      </div>
      <br />
      <div>
        <Accordion title="Some client"></Accordion>
      </div>
    </>
  );
};

export default ClientsPage;
