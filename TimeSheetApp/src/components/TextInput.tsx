import { useState } from "react";

interface Props {
  labelText: string;
  className: string;
  type: string;
  name: string;
  value: string | number;
  checked?: boolean;
  handleChange: (newValue: string) => void;
}

const TextInput = ({
  labelText = "",
  className,
  type,
  name,
  value,
  handleChange,
  checked = false,
}: Props) => {
  const [text, setText] = useState(value);

  return (
    <>
      <label>{labelText}</label>
      <input
        className={className}
        name={name}
        type={type}
        value={text}
        checked={checked}
        onChange={(e) => {
          setText(e.target.value);
          handleChange(e.target.value);
        }}
      />
    </>
  );
};

export default TextInput;
