import { useEffect, useState } from "react";
import ClientType from "../types/ClientType";
import { useData } from "../hooks/DataContext";

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
    "⌫",
  ] as const;

  const [selectedLetter, setSelectedLetter] = useState("");

  const { fetchData, setQueryParams, queryParams } = useData<ClientType>();

  useEffect(() => {
    fetchData();
  }, [queryParams]);

  const letterClicked = (event: any) => {
    setSelectedLetter(event.target.text);
    setQueryParams((prevParams) => ({
      ...prevParams,
      firstLetter: event.target.text,
      pageNumber: 1,
    }));
  };

  const clearFilter = () => {
    setSelectedLetter("");
    setQueryParams((prevParams) => ({
      ...prevParams,
      firstLetter: "",
    }));
  };

  return (
    <>
      <div className="alpha">
        <ul>
          {letters.map((letter, index) => (
            <li
              key={index}
              className={selectedLetter === letter ? "active" : ""}
            >
              <a onClick={letter !== "⌫" ? letterClicked : clearFilter}>
                {letter}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LetterFilter;
