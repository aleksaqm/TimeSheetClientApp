import { useState } from "react";

interface Props {
  labelText: string;
  options: { key: number; value: string }[];
}

const DropDownList = ({ labelText, options }: Props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <label>{labelText}</label>
      <select value={selectedValue} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDownList;
