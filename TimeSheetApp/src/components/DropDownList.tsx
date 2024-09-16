import { useState } from "react";

interface Props {
  labelText: string;
  options: { key: number; value: string }[];
  selected: string;
  handleChange: (newValue: string, newIndex: number) => void;
}

const DropDownList = ({
  labelText,
  options,
  selected,
  handleChange,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState(selected);

  const onHandleChange = (event: any) => {
    const newValue = event.target.value;
    const newIndex = options.findIndex((option) => option.value === newValue);
    setSelectedValue(newValue);
    handleChange(newValue, newIndex);
  };

  return (
    <>
      <label>{labelText}</label>
      <select value={selectedValue} onChange={onHandleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDownList;
