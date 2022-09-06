import React from "react";

const Pagination = ({ page, setPage }) => {
  const lastPage = Math.ceil(100 / 12);

  const currentPage =
    page === 1 ? (
      <span>
        <span className="currentPage">{page}</span> {page + 1} {page + 2}....
      </span>
    ) : page === lastPage ? (
      <span>
        .....{page - 2} {page - 1}
        <span className="currentPage"> {page}</span>
      </span>
    ) : (
      <span>
        ...{page - 1} <span className="currentPage"> {page}</span>
        {page + 1}...
      </span>
    );

  const nextHandler = () => {
    if (page < lastPage) {
      setPage((preVal) => preVal + 1);
    }
  };
  const prevHandler = () => {
    if (page > 1) {
      setPage((preVal) => preVal - 1);
    }
  };

  return (
    <div className="paginationContainer">
      {page > 1 ? (
        <button className="paginationButton" onClick={() => prevHandler()}>
          Prev
        </button>
      ) : (
        ""
      )}
      <span>{currentPage}</span>
      {lastPage > page ? (
        <button className="paginationButton" onClick={() => nextHandler()}>
          Next
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
