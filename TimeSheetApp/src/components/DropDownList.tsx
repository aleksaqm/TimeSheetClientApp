import { useState } from "react";

interface Props {
  labelText: string;
  options: { key: number; value: string }[];
  selected: string;
  handleChange: (newValue: string) => void;
}

const DropDownList = ({
  labelText,
  options,
  selected,
  handleChange,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState(selected);

  const onHandleChange = (event: any) => {
    setSelectedValue(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <>
      <label>{labelText}</label>
      <select value={selectedValue} onChange={onHandleChange}>
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
