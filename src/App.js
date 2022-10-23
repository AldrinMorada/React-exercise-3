import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { getProducts } from "./services/ProductService";

import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";

function App() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((p) => setProducts(p.data));
  }, []);

  const handleIncrement = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          if (product.counter) {
            return {
              ...product,
              counter: product.counter + 1,
            };
          } else {
            return {
              ...product,
              counter: 1,
            };
          }
        }
        return product;
      })
    );
  };

  const handleDecrement = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            counter: product.counter - 1,
          };
        }
        return product;
      })
    );
  };

  const handleReset = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            counter: 0,
          };
        }
        return product;
      })
    );
  };

  const getCountersWithValue = () => {
    return products.filter((product) => product.counter && product.counter > 0)
      .length;
  };

  return (
    <div>
      <Navbar props={getCountersWithValue()} />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route
          path="/products"
          element={
            <Dashboard
              products={products}
              handleReset={handleReset}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          }
        />
        <Route path="/products/table" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/add" element={<ProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
