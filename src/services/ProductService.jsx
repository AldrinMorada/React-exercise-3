import axios from "axios";

export const getProducts = async () => {
  try {
    return await axios.get(`http://localhost:3000/products`);
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteProductById = async (id) => {
  await axios.delete(`http://localhost:3000/products/` + id);
};

export const addProduct = async (product) => {
  await axios.post(`http://localhost:3000/products`, product);
};
