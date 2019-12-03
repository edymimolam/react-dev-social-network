import React, { useState } from "react";
import style from "./Pagination.module.css";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

const Pagination = ({
  usersTotalCount,
  usersPerPage,
  currentPage,
  onPageClick,
  portionSize = 10
}) => {
  let [portionCount, setPortionCount] = useState(
    Math.ceil(currentPage / portionSize)
  );

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
        <IconButton
          onClick={() => setPortionCount(portionCount - 1)}
          color="primary"
        >
          <ArrowBackRoundedIcon />
        </IconButton>
        // <button onClick={() => setPortionCount(portionCount - 1)}>Prev</button>
      )}

      {pagesAmount()
        .filter(
          p => p >= firstPageOfCurrentPortion && p <= lastPageOfCurrentPortion
        )
        .map(p => (
          <IconButton
            key={p}
            className={style.page}
            color={currentPage === p ? "secondary" : ""}
            onClick={() => onPageClick(p)}
          >
            <Typography variant="button">{p}</Typography>
          </IconButton>
        ))}

      {portionCount < portionsTotalCount && (
        <IconButton
          onClick={() => setPortionCount(portionCount + 1)}
          color="primary"
        >
          <ArrowForwardRoundedIcon />
        </IconButton>
        // <button onClick={() => setPortionCount(portionCount + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
