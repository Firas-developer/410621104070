import React from 'react';

function Filters({ filters, setFilters, setSort }) {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="mb-4">
      <div className="form-group">
        <label>Category</label>
        <input type="text" name="category" value={filters.category} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Company</label>
        <input type="text" name="company" value={filters.company} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Rating</label>
        <input type="number" name="rating" value={filters.rating} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Price Range</label>
        <input type="text" name="priceRange" value={filters.priceRange} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Availability</label>
        <input type="text" name="availability" value={filters.availability} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Sort By</label>
        <select name="sort" onChange={handleSortChange} className="form-control">
          <option value="">Select</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="discount">Discount</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;