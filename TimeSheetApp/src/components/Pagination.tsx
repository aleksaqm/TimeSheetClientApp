import { useEffect, useState } from "react";
import PaginationType from "../types/PaginationType";
import ClientType from "../types/ClientType";
import { useData } from "../hooks/DataContext";

interface Props {
  paginationData: PaginationType;
}

const Pagination = ({ paginationData }: Props) => {
  const [page, setPage] = useState(paginationData.CurrentPage);

  const { fetchData, setQueryParams, queryParams, paginationInfo } =
    useData<ClientType>();

  const nextPage = () => {
    setQueryParams((prevParams) => ({
      ...prevParams,
      pageNumber: page + 1,
    }));
    setPage(page + 1);
  };

  const previousPage = () => {
    setQueryParams((prevParams) => ({
      ...prevParams,
      pageNumber: page - 1,
    }));
    setPage(page - 1);
  };

  useEffect(() => {
    fetchData().then(() => {
      if (paginationInfo) {
        setPage(paginationInfo.CurrentPage);
      }
    });
  }, [page, queryParams]);

  return (
    <>
      <div className="pagination">
        <ul>
          {paginationData.HasPrevious && (
            <>
              <li onClick={previousPage}>
                <a>Previous</a>
              </li>
              <li onClick={previousPage}>
                <a>{page - 1}</a>
              </li>
            </>
          )}
          <li>
            <a style={{ fontWeight: "bold" }}>{page}</a>
          </li>
          {paginationData.HasNext && (
            <>
              <li onClick={nextPage}>
                <a>{page + 1}</a>
              </li>
              <li onClick={nextPage}>
                <a>Next</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
