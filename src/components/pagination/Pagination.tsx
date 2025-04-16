import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface BasicPaginationProps {
  count: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export default function BasicPagination({ count, onPageChange, currentPage }: BasicPaginationProps) {
  return (
    <Stack spacing={1} className="custom-pagination">
      <Pagination
        count={count}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
        color="primary"
      />
    </Stack>
  );
}
