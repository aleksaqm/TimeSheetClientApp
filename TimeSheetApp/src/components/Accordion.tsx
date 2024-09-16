import { useState } from "react";

interface Props<T> {
  object: T;
  DetailsComponent: React.ComponentType<{ item: T }>;
}

const Accordion = <T extends unknown>({
  object,
  DetailsComponent,
}: Props<T>) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion-wrap">
        <div className="item">
          <div onClick={() => setIsActive(!isActive)} className="heading">
            <span>{(object as any).name}</span>
            <span>{isActive ? "-" : "+"}</span>
          </div>
          {isActive && <DetailsComponent item={object} />}
        </div>
      </div>
    </>
  );
};

export default Accordion;
