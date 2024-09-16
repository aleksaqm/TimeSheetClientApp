import { useEffect } from "react";
import { useData } from "../hooks/DataContext";
import Popup from "reactjs-popup";
import TextInput from "./TextInput";

interface HeaderProps<T> {
  useDataHook: () => ReturnType<typeof useData<T>>;
  createPopup: React.ReactNode;
}

const DataHeader = <T extends unknown>({
  useDataHook,
  createPopup,
}: HeaderProps<T>) => {
  const { fetchData, setQueryParams, queryParams } = useDataHook();

  useEffect(() => {
    fetchData();
  }, [queryParams]);

  const search = (value: string) => {
    setQueryParams((prevParams) => ({
      ...prevParams,
      searchText: value,
      pageNumber: 1,
    }));
  };

  return (
    <div className="grey-box-wrap reports">
      <Popup
        trigger={<a className="link new-member-popup">Create new item</a>}
        position={"right center"}
        modal
        nested
      >
        {createPopup}
      </Popup>
      <div className="search-page">
        <TextInput
          value=""
          type="search"
          name="search-items"
          className="in-search"
          labelText=""
          handleChange={(value) => search(value)}
        />
      </div>
    </div>
  );
};

export default DataHeader;
