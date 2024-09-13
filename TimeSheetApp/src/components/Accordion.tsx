import { useState } from "react";
import ClientDetails from "./ClientDetails";

// interface Props {
//   title: string;
// }

const Accordion = ({ object }: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion-wrap">
        <div className="item">
          <div onClick={() => setIsActive(!isActive)} className="heading">
            <span>{object.name}</span>
            <span>{isActive ? "-" : "+"}</span>
          </div>
          {isActive && <ClientDetails client={object}></ClientDetails>}
        </div>
      </div>
    </>
  );
};

export default Accordion;
