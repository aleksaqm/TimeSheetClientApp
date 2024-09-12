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
  ];

  const [selectedLetter, setSelectedLetter] = useState("");

  const letterClicked = (event: any) => {
    setSelectedLetter(event.target.value);
  };

  return (
    <>
      <div className="alpha">
        <ul>
          {letters.map((letter) => (
            <li>
              <a onClick={letterClicked}>{letter}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LetterFilter;
