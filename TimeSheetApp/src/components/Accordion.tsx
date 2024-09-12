import { useState } from "react";
import TextInput from "./TextInput";
import DropDownList from "./DropDownList";

interface Props {
  title: string;
}

const Accordion = ({ title }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion-wrap">
        <div className="item">
          <div onClick={() => setIsActive(!isActive)} className="heading">
            <span>{title}</span>
            <span>{isActive ? "-" : "+"}</span>
          </div>
          {isActive && (
            <div className="details">
              <ul className="form">
                <li>
                  <TextInput
                    type="text"
                    name=""
                    className="in-text"
                    labelText="Client name:"
                  />
                </li>
                <li>
                  <TextInput
                    type="text"
                    name=""
                    className="in-text"
                    labelText="Client name:"
                  />
                </li>
              </ul>
              <ul className="form">
                <li>
                  <TextInput
                    type="text"
                    name=""
                    className="in-text"
                    labelText="Client name:"
                  />
                </li>
                <li>
                  <DropDownList
                    labelText="Country:"
                    options={[
                      { key: 1, value: "Srbija" },
                      { key: 2, value: "Crna Gora" },
                    ]}
                  ></DropDownList>
                </li>
              </ul>
              <ul className="form last">
                <TextInput
                  type="text"
                  name=""
                  className="in-text"
                  labelText="Client name:"
                />
              </ul>
              <div className="buttons">
                <div className="inner">
                  <a className="btn green">Save</a>
                  <a className="btn red">Delete</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
