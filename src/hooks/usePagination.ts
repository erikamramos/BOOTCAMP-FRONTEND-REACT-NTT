import { useState } from 'react';

type UsePaginationProps = {
  totalItems: number;
  itemsPerPage: number;
};

type UsePaginationReturn = {
  currentPage: number;
  totalPages: number;
  skip: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
};

export const usePagination = ({
  totalItems,
  itemsPerPage,
}: UsePaginationProps): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const skip = (currentPage - 1) * itemsPerPage;

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);

  return {
    currentPage,
    totalPages,
    skip,
    setPage,
    nextPage,
    prevPage,
  };
};
