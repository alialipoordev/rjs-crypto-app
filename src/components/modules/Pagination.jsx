import style from "./Pagination.module.css";

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((prevState) => prevState - 1);
  };

  const nextHandler = () => {
    if (page >= 10) return;
    setPage((prevState) => prevState + 1);
  };

  return (
    <div className={style.pagination}>
      <button
        onClick={previousHandler}
        className={page === 1 ? style.disabled : null}
      >
        Previous
      </button>
      <p className={page === 1 ? style.selected : null}>1</p>
      <p className={page === 2 ? style.selected : null}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className={style.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p className={page === 9 ? style.selected : null}>9</p>
      <p className={page === 10 ? style.selected : null}>10</p>
      <button
        onClick={nextHandler}
        className={page === 10 ? style.disabled : null}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
