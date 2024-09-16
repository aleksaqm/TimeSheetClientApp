import TextInput from "./TextInput";

const NewActivityPopup = () => {
  const printaj = () => {
    console.log("aa");
  };

  return (
    <>
      <div id="new-member" className="new-member-inner">
        <h2>Create new activity</h2>
        <ul className="form">
          <li>
            <TextInput
              type="text"
              name=""
              value="aa"
              className="in-text"
              labelText="Client:"
              handleChange={(value) => console.log(value)}
            ></TextInput>
          </li>
          <li>
            <TextInput
              type="text"
              name=""
              value="bb"
              className="in-text"
              labelText="Project:"
              handleChange={(value) => console.log(value)}
            ></TextInput>
          </li>
          <li>
            <TextInput
              type="text"
              name=""
              value="ccc"
              className="in-text"
              labelText="Category:"
              handleChange={(value) => console.log(value)}
            ></TextInput>
          </li>
          <li>
            <TextInput
              type="text"
              name=""
              value="ddd"
              className="in-text"
              labelText="Description:"
              handleChange={(value) => console.log(value)}
            ></TextInput>
          </li>
          <li>
            <TextInput
              type="text"
              name=""
              value="ccc"
              className="in-text"
              labelText="Time:"
              handleChange={(value) => console.log(value)}
            ></TextInput>
          </li>
          <li>
            <TextInput
              type="text"
              name=""
              value="ccc"
              className="in-text"
              labelText="Overtime:"
              handleChange={(value) => console.log(value)}
            ></TextInput>
          </li>
        </ul>
        <div className="buttons">
          <div className="inner">
            <a onClick={printaj} className="btn green">
              Save
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewActivityPopup;
