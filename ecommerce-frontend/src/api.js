import axios from 'axios';

const API_BASE_URL = 'https://test-server.com/api';

export const getProducts = async (params) => {
  const response = await axios.get(`${API_BASE_URL}/products`, { params });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};