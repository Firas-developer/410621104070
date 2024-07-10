import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
function HomePage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', company: '', rating: '', priceRange: '', availability: '' });
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const params = { ...filters, sort, page };
      const data = await getProducts(params);
      setProducts(data.products);
      setTotalPages(data.totalPages);
    };
    fetchProducts();
  }, [filters, sort, page]);

  return (
    <div className="container">
      <h1 className="my-4">Top Products</h1>
      <Filters filters={filters} setFilters={setFilters} setSort={setSort} />
      <ProductList products={products} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export default HomePage;