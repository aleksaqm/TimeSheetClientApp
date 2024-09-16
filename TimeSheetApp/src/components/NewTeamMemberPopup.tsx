import TextInput from "./TextInput";

const NewTeamMemberPopup = () => {
  return (
    <>
      <div className="new-member-wrap">
        <div id="new-member" className="new-member-inner">
          <h2>Create new team member</h2>
          <ul className="form">
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => console.log(value)}
                labelText="Name:"
                name=""
                type="text"
                value=""
              ></TextInput>
            </li>
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => console.log(value)}
                labelText="Hours per week:"
                name=""
                type="number"
                value={0}
              ></TextInput>
            </li>
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => console.log(value)}
                labelText="Username:"
                name=""
                type="text"
                value=""
              ></TextInput>
            </li>
            <li>
              <TextInput
                className="in-text"
                handleChange={(value) => console.log(value)}
                labelText="Email:"
                name=""
                type="text"
                value=""
              ></TextInput>
            </li>
            <li className="inline">
              <label>Status:</label>
              <span className="radio">
                <TextInput
                  className=""
                  name="status"
                  type="radio"
                  labelText="Inactive:"
                  handleChange={(value) => console.log(value)}
                  value={0}
                ></TextInput>
              </span>
              <TextInput
                className=""
                name="status"
                type="radio"
                labelText="Active:"
                handleChange={(value) => console.log(value)}
                value={0}
              ></TextInput>
            </li>
            <li className="inline">
              <label>Role:</label>
              <span className="radio">
                <TextInput
                  className=""
                  name="status"
                  type="radio"
                  labelText="Admin:"
                  handleChange={(value) => console.log(value)}
                  value={1}
                ></TextInput>
              </span>
              <span className="radio">
                <TextInput
                  className=""
                  name="status"
                  type="radio"
                  labelText="Worker:"
                  handleChange={(value) => console.log(value)}
                  value={0}
                ></TextInput>
              </span>
            </li>
          </ul>
          <div className="buttons">
            <div className="inner">
              <a href="javascript:;" className="btn green">
                Invite team member
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTeamMemberPopup;
