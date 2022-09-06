import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./Components/Home";
import Pagination from "./Components/Pagination";

const App = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([0]);
  useEffect(() => {
    const fetchAPi = async () => {
      const URL = `https://dummyjson.com/products?skip=${
        (page - 1) * 12
      }&limit=12`;
      const response = await axios.get(URL);
      const productsObj = response.data;
      setProducts(productsObj.products);
    };

    fetchAPi();
  }, [page]);

  return (
    <div>
      <Home page={page} products={products} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default App;
