import { useState } from "react";

const Pagination = (paginationInfo: any) => {
  const [page, setPage] = useState(paginationInfo.currentPage);
  console.log(paginationInfo);
  return (
    <>
      <div className="pagination">
        <ul>
          {paginationInfo.hasPrevious && (
            <li onClick={() => setPage(page - 1)}>
              <a>{page}-1</a>
            </li>
          )}
          <li>
            <a>{page}</a>
          </li>
          {paginationInfo.hasNext && (
            <li onClick={() => setPage(page + 1)}>
              <a>{page} + 1</a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
