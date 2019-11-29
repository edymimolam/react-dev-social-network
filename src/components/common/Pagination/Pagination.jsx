import React, { useState } from "react";
import style from "./Pagination.module.css";

const Pagination = ({
  usersTotalCount,
  usersPerPage,
  currentPage,
  onPageClick,
  portionSize = 10
}) => {
  let [portionCount, setPortionCount] = useState(1);

  let pagesTotalCount = Math.ceil(usersTotalCount / usersPerPage);
  let portionsTotalCount = Math.ceil(pagesTotalCount / portionSize);

  let firstPageOfCurrentPortion = portionSize * portionCount - portionSize + 1;
  let lastPageOfCurrentPortion = portionSize * portionCount;

  let pagesAmount = () => {
    let pages = [];
    for (let i = 1; i <= pagesTotalCount; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className={style.paginationContainer}>
      {portionCount > 1 && (
        <button onClick={() => setPortionCount(portionCount - 1)}>Prev</button>
      )}

      {pagesAmount()
        .filter(
          p => p >= firstPageOfCurrentPortion && p <= lastPageOfCurrentPortion
        )
        .map(p => (
          <span
            key={p}
            className={`${style.page} ${
              currentPage === p ? style.pageActive : ""
            }`}
            onClick={() => onPageClick(p)}
          >
            {p}
          </span>
        ))}

      {portionCount < portionsTotalCount && (
        <button onClick={() => setPortionCount(portionCount + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
