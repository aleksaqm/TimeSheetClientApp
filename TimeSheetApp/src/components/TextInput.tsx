import { useState } from "react";

interface Props {
  labelText: string;
  className: string;
  type: string;
  name: string;
}

const TextInput = ({ labelText = "", className, type, name }: Props) => {
  const [text, setText] = useState("");

  return (
    <>
      <label>{labelText}</label>
      <input
        className={className}
        name={name}
        type={type}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default TextInput;
