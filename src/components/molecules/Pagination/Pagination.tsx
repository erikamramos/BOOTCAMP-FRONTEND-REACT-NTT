import { FC } from 'react';
import styles from './Pagination.module.css';

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.pagination__button}
      >
        {'<'}
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          data-testid={`pagination_${index + 1}`}
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`${styles.pagination__button} ${currentPage === index + 1 ? styles.pagination__button__active : ''}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.pagination__button}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
