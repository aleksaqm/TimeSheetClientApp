import { useState } from "react";

interface Props {
  labelText: string;
  className: string;
  type: string;
  name: string;
  value: string;
  handleChange: (newValue: string) => void;
}

const TextInput = ({
  labelText = "",
  className,
  type,
  name,
  value,
  handleChange,
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
        onChange={(e) => {
          setText(e.target.value);
          handleChange(e.target.value);
        }}
      />
    </>
  );
};

export default TextInput;
