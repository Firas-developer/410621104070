import React from 'react';

function Pagination({ page, setPage, totalPages }) {
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="d-flex justify-content-between my-4">
      <button onClick={handlePrevious} className="btn btn-primary" disabled={page === 1}>
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={handleNext} className="btn btn-primary" disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;