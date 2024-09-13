import { useState } from "react";

const LetterFilter = () => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ] as const;

  const [selectedLetter, setSelectedLetter] = useState("");

  const letterClicked = (event: any) => {
    setSelectedLetter(event.target.text);
    console.log(selectedLetter);
  };

  return (
    <>
      <div className="alpha">
        <ul>
          {letters.map((letter, index) => (
            //if selectedLetter == letter => give li element className = 'active'
            <li
              key={index}
              className={selectedLetter === letter ? "active" : ""}
            >
              <a onClick={letterClicked}>{letter}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LetterFilter;
